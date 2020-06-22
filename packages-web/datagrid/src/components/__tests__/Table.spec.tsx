import { shallow } from "enzyme";
import { createElement } from "react";
import { Table, TableProps } from "../Table";

describe("Table", () => {
    it("renders the structure correctly", () => {
        const component = shallow(<Table {...mockTableProps()} />);

        expect(component).toMatchSnapshot();
    });

    it("renders the structure correctly with sorting", () => {
        const component = shallow(<Table {...mockTableProps()} columnsSortable />);

        expect(component).toMatchSnapshot();
    });

    it("renders the structure correctly with resizing", () => {
        const component = shallow(<Table {...mockTableProps()} columnsResizable />);

        expect(component).toMatchSnapshot();
    });

    it("renders the structure correctly with dragging", () => {
        const component = shallow(<Table {...mockTableProps()} columnsDraggable />);

        expect(component).toMatchSnapshot();
    });

    it("renders the structure correctly with filtering", () => {
        const component = shallow(<Table {...mockTableProps()} columnsFilterable />);

        expect(component).toMatchSnapshot();
    });

    it("renders the structure correctly with hiding", () => {
        const component = shallow(<Table {...mockTableProps()} columnsHidable />);

        expect(component).toMatchSnapshot();
    });

    it("renders the structure correctly with paging", () => {
        const component = shallow(<Table {...mockTableProps()} paging />);

        expect(component).toMatchSnapshot();
    });
});

function mockTableProps(): TableProps {
    return {
        setPage: jest.fn(),
        page: 1,
        hasMoreItems: false,
        pageSize: 10,
        columnsResizable: false,
        paging: false,
        pagingPosition: "bottom",
        columnsHidable: false,
        columnsDraggable: false,
        footerWidgets: undefined,
        headerWidgets: undefined,
        className: "test",
        columnsFilterable: false,
        columnsSortable: false,
        columns: [
            {
                attribute: "column",
                header: "Test",
                hasWidgets: false,
                content: { widgetCount: 0, renderer: jest.fn() },
                sortable: false,
                filterable: false,
                resizable: false,
                draggable: false,
                hidable: "no"
            }
        ],
        data: [{ id: "id" as any }]
    };
}
