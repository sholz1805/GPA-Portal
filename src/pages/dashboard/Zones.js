import React from 'react';
import DashboardLayout from "../DashboardLayout";
import Card from "../../components/Card";
import { RiUser2Line, RiTeamLine, RiGitBranchLine, RiFlowChart   } from "react-icons/ri";

const formatNumber = (number, isCurrency = false) => {
    let formattedNumber = '';
  
    if (number >= 1000000) {
      formattedNumber = (number / 1000000).toFixed(1) + 'm';
    } else if (number >= 10000) {
      formattedNumber = (number / 1000).toFixed(1) + 'k';
    } else {
      formattedNumber = number.toString();
    }
  
    if (isCurrency) {
      return `N${formattedNumber}`;
    }
  
    return formattedNumber;
  };


  const cardDetails = [
    { Icon: RiFlowChart, percentage: "-0.6%", number: 6, cardLabel: "Total Zones" },
    { Icon: RiGitBranchLine, percentage: "1.2%", number: 65, cardLabel: "Total Branches" },
    { Icon: RiTeamLine, percentage: "0.8%", number: 67500, cardLabel: "Total Members" },
    { Icon: RiUser2Line , percentage: "2.5%", number: 60, cardLabel: "Total Leaders" }
  ];


const Zones = () => {
    return (
        <DashboardLayout>
             <div className="text-[24px] font-[600] text-[#0D0D0D]">Zones</div>
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
        </DashboardLayout>
    );
};

export default Zones;

