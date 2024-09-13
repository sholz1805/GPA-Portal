import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import Card from "../../components/Card";
import {
  RiFlowChart,
  RiTeamLine,
  RiCashLine,
  RiGitBranchLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import DoughnutChart from "./ChartData/DoughnutChart";
import ChartsTable from "./ChartData/ChartTable";
import Drawer from "@mui/material/Drawer";

const formatNumber = (number, isCurrency = false) => {
  let formattedNumber = "";

  if (number >= 1000000) {
    formattedNumber = (number / 1000000).toFixed(1) + "m";
  } else if (number >= 10000) {
    formattedNumber = (number / 1000).toFixed(1) + "k";
  } else {
    formattedNumber = number.toString();
  }

  if (isCurrency) {
    return `N${formattedNumber}`;
  }

  return formattedNumber;
};

const cardDetails = [
  {
    Icon: RiTeamLine,
    percentage: "-0.6%",
    number: 67500,
    cardLabel: "Total Members",
  },
  {
    Icon: RiFlowChart,
    percentage: "1.2%",
    number: 6,
    cardLabel: "Total Zones",
  },
  {
    Icon: RiGitBranchLine,
    percentage: "0.8%",
    number: 65,
    cardLabel: "Total Branches",
  },
  {
    Icon: RiCashLine,
    percentage: "2.5%",
    number: 5100000,
    cardLabel: "Total Income",
    isCurrency: true,
  },
];

const Overview = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <DashboardLayout>
      <div className="text-[24px] font-[600] text-[#0D0D0D]">Overview</div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-xl w-full px-4">
          {cardDetails.map((details, index) => (
            <Card
              key={index}
              Icon={details.Icon}
              percentage={details.percentage}
              number={formatNumber(details.number, details.isCurrency)}
              cardLabel={details.cardLabel}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-5">
        <div className="w-full lg:max-w-screen-xl bg-transparent px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-[63%] flex flex-col gap-4">
              <div
                className="border border-[#D9D9D9] bg-white rounded-lg p-4 flex flex-col justify-between"
                style={{ minHeight: "300px" }}
              >
                <div className="border-b border-[#D9D9D9] p-2 bg-green flex justify-between">
                  <p className="font-medium text-base">
                    Zonal Members breakdown
                  </p>
                  <button className="border border-[#D9D9D9] cursor-pointer p-2 rounded-lg flex justify-between items-center space-x-2">
                    <span>All time</span>
                    <RiArrowDownSLine className="text-[#0D0D0D] text-m" />
                  </button>
                </div>
                <div className="flex-1 p-1 flex flex-col md:flex-row justify-between items-center">
                  <DoughnutChart />
                  <ChartsTable />
                </div>
              </div>

              <div className="border border-[#D9D9D9] bg-white rounded-lg p-4 flex flex-col justify-between   min-h-full md:min-h-[300px]">
                <div className="border-b border-[#D9D9D9] p-2 bg-green flex justify-between">
                  <p className="font-medium text-base">
                    Zonal financial breakdown
                  </p>
                  <button className="border border-[#D9D9D9] cursor-pointer p-2 rounded-lg flex justify-between items-center space-x-2">
                    <span>All time</span>
                    <RiArrowDownSLine className="text-[#0D0D0D] text-m" />
                  </button>
                </div>
                <div className="flex-1 p-1 flex flex-col md:flex-row justify-between items-center">
                  <DoughnutChart />
                  <ChartsTable />
                </div>
              </div>
            </div>

            <div
              className="w-full lg:w-[37%] border border-[#D9D9D9] bg-white rounded-lg p-4 flex flex-col justify-between"
              style={{ height: "600px" }}
            >
              <div className="border-b border-[#D9D9D9] p-2 bg-green flex justify-between">
                <p className="font-medium text-base">Recent Activities</p>
                <a
                  className="text-[#2D56A8] underline cursor-pointer"
                  onClick={toggleDrawer(true)}
                >
                  See all
                </a>
              </div>

              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
              >
                <div
                  style={{ width: 400 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <p style={{ padding: "1rem" }}>All Recent Activities</p>
                  {/* Add your drawer content here */}
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
