import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Header from "./components/Header";
import Widget from "./components/Widget";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useLocalStorage } from "usehooks-ts";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layouts = {
  lg: [
    { i: "calendar", x: 0, y: 0, w: 12, h: 2 },
    { i: "chart", x: 0, y: 2, w: 4, h: 2 },
    { i: "gallery", x: 4, y: 2, w: 8, h: 2 },
  ],
};

function App() {
  const [currentLayouts, setCurrentLayouts] = useLocalStorage(
    "layout",
    layouts
  );
  const [isEditing, setIsEditing] = useState(false);

  const onLayoutChange = (layout: any, layouts: any) => {
    setCurrentLayouts(layouts);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isEditing={isEditing} setIsEditing={setIsEditing} />
      <div className="mx-auto">
        <ResponsiveGridLayout
          className="layout"
          layouts={currentLayouts}
          onLayoutChange={onLayoutChange}
          isDraggable={isEditing}
          isResizable={isEditing}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
          rowHeight={150}
          margin={[16, 16]}
        >
          <div key="calendar">
            <Widget title="Calendar"></Widget>
          </div>
          <div key="chart">
            <Widget title="Chart"></Widget>
          </div>
          <div key="gallery">
            <Widget title="Files Gallery"></Widget>
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
}

export default App;
