import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import AdditionalInfo from "./AdditionalInfo";
import ReviewCard from "./ReviewCard";
 
export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    
    {
      label: "Additional Info.",
      value: "html",
      desc: <AdditionalInfo/>,
    },
    {
      label: "Reviews",
      value: "reviews",
      desc:<ReviewCard/>,
    },
   
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none  border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2  border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900 font-bold" : "text-gray-500"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}