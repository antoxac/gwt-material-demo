package gwt.material.design.demo.client.application.addins.datatable.table;

/*
 * #%L
 * GwtMaterial
 * %%
 * Copyright (C) 2015 - 2016 GwtMaterialDesign
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */


import com.google.gwt.core.client.GWT;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import gwt.material.design.client.constants.Color;
import gwt.material.design.client.data.component.CategoryComponent;
import gwt.material.design.client.data.infinite.InfiniteDataView;
import gwt.material.design.client.ui.MaterialImage;
import gwt.material.design.client.ui.table.MaterialInfiniteDataTable;
import gwt.material.design.client.ui.table.cell.TextColumn;
import gwt.material.design.client.ui.table.cell.WidgetColumn;
import gwt.material.design.demo.client.application.addins.datatable.table.datasource.PersonDataSource;
import gwt.material.design.demo.client.application.addins.datatable.table.service.FakePersonService;
import gwt.material.design.demo.client.application.addins.datatable.table.service.PersonServiceAsync;

import java.util.List;

import static gwt.material.design.jquery.client.api.JQuery.$;

public class InfiniteTable extends Composite {
    interface InfiniteGridUiBinder extends UiBinder<HTMLPanel, InfiniteTable> {
    }

    private static InfiniteGridUiBinder ourUiBinder = GWT.create(InfiniteGridUiBinder.class);

    // Replace this with your actual service interface, like so:
    // private PersonServiceAsync personService = GWT.create(PersonService.class);
    // we are faking the service on the client side to avoid requiring a web server.
    private PersonServiceAsync personService = GWT.create(FakePersonService.class);

    @UiField(provided = true)
    MaterialInfiniteDataTable<Person> table;

    public InfiniteTable() {
        table = new MaterialInfiniteDataTable<>(20,
                InfiniteDataView.DYNAMIC_VIEW, new PersonDataSource(personService));

        initWidget(ourUiBinder.createAndBindUi(this));
    }

    @Override
    protected void onLoad() {
        super.onLoad();
        table.getTableTitle().setText("Infinite Table");
        // Load the categories from the server
        table.setLoadMask(true);
        personService.getCategories(new AsyncCallback<List<String>>() {
            @Override
            public void onSuccess(List<String> categories) {
                for(String category : categories) {
                    table.addCategory(new CategoryComponent(category));
                }
                table.setLoadMask(false);
            }
            @Override
            public void onFailure(Throwable throwable) {
                GWT.log("Getting people categories async call failed.", throwable);
            }
        });

        // Add an image profile on each category rows
        table.addColumn(new WidgetColumn<Person, MaterialImage>() {
            @Override
            public MaterialImage getValue(Person object) {
                MaterialImage profile = new MaterialImage();
                profile.setUrl(object.getPicture());
                profile.setWidth("40px");
                profile.setHeight("40px");
                profile.setPadding(4);
                profile.setMarginTop(8);
                profile.setBackgroundColor(Color.GREY_LIGHTEN_2);
                profile.setCircle(true);
                return profile;
            }
        });

        // Add the tables columns
        table.addColumn(new TextColumn<Person>() {
            @Override
            public boolean isSortable() {
                return true;
            }
            @Override
            public String getValue(Person object) {
                return object.getFirstName();
            }
        }, "First Name");

        table.addColumn(new TextColumn<Person>() {
            @Override
            public boolean isSortable() {
                return true;
            }
            @Override
            public String getValue(Person object) {
                return object.getLastName();
            }
        }, "Last Name");

        table.addColumn(new TextColumn<Person>() {
            @Override
            public boolean isSortable() {
                return true;
            }
            @Override
            public String getValue(Person object) {
                return object.getPhone();
            }
        }, "Phone");

        table.addRowSelectHandler((e, model, elem, selected) -> {
            updateSelectedRows(table.getSelectedRowModels(false).size());
            GWT.log(model.getId() + ": " + selected);
            return true;
        });

        table.addSortColumnHandler((e, sortContext, columnIndex) -> {
            GWT.log("Sorted: " + sortContext.getSortDir() + ", columnIndex: " + columnIndex);
            table.refreshView();
            return true;
        });

        table.addSelectAllHandler((e, models, elems, selected) -> {
            updateSelectedRows(table.getSelectedRowModels(false).size());
            GWT.log("Selected["+selected+"]: " + models.size() + " models");
            return true;
        });

        if(!table.isUseCategories()) {
            // Since we aren't using categories for this table
            // we will forcefully invoke a table refresh that
            // sends a request for data.
            table.refreshView();
        }
    }

    @UiHandler("cbCategories")
    void onCategories(ValueChangeEvent<Boolean> e) {
        if(e.getValue()){
            table.setUseCategories(true);
            GWT.log("Categories checked");
        }else{
            table.setUseCategories(false);
            GWT.log("Categories not checked");
        }
        table.setRedraw(true);
        table.refreshView();
    }

    private void updateSelectedRows(int size) {
        String word = " item ";
        if(size > 1) {
            word = " items ";
        }
        if(size <= 0) {
            table.getTableTitle().setText("Table Title");
            table.getScaffolding().getTopPanel().removeStyleName("active-header");
        }else {
            table.getScaffolding().getTopPanel().addStyleName("active-header");
            table.getTableTitle().setText(size + word + "selected ");
        }
    }
}