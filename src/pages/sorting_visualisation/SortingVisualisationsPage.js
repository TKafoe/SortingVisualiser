import React from 'react';
import { Divider, Layout, Tabs } from "antd";
import { SortingSketchComponent } from "./components/SortingSketchComponent";

const { Content } = Layout;
const { TabPane } = Tabs;

export class SortingVisualisationsPage extends React.Component {
    render() {
        return (
            <div className="site-layout-content">
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="MergeSort" key="1">
                        <Content style={{align: "center"}}>
                            <Divider>A visualisation to show the merge sort algorithm.</Divider>
                            <SortingSketchComponent strategy="mergeSort"/>
                        </Content>
                    </TabPane>
                    <TabPane tab="InsertionSort" key="2">
                        <Content>
                            <Divider>A visualisation to show the insertion sort algorithm.</Divider>
                            <SortingSketchComponent strategy="insertionSort"/>
                        </Content>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
