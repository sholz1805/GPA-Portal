import React from 'react';

const ChartTable = () => {
  const data = [
    { label: 'Mushin~23%', branches: 6, members: '7,700', color: '#C6CFE1' },
    { label: 'Ipaja~17%', branches: 5, members: '6,298', color: '#7193D7' },
    { label: 'Dopemu~23%', branches: 7, members: '17,992', color: '#2D56A8' },
    { label: 'Alagbado~19%', branches: 8, members: '12,918', color: '#B5D7C9' },
    { label: 'Oshodi~20%', branches: 4, members: '4,991', color: '#18B877' },
    { label: 'Sango~16%', branches: 6, members: '6,929', color: '#037748' },
  ];

  return (
    <div className="max-w-[300px]">
      <table className="w-full">
        <thead>
          <tr>
            <th></th>
            <th className="text-left text-xs text-[#585252] font-normal pr-4">BRANCHES</th>
            <th className="text-left text-xs text-[#585252] font-normal">MEMBERS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="py-1">
              <td className="flex items-center"> 
                <span
                  style={{
                    backgroundColor: item.color,
                    borderRadius: '50%',
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    marginRight: '8px',
                  }}
                ></span>
                {item.label}
              </td>
              <td className="text-right text-m font-medium pr-4 py-1">{item.branches}</td>
              <td className="text-right text-m font-medium py-1">{item.members}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChartTable;
