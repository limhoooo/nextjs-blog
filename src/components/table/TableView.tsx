import Link from "next/link";
import React from "react";
type TableItem = {
  [key: string]: string | number;
};
type Props = {
  tableHeader: string[];
  tableBody: TableItem[];
};

export default function TableView({ tableHeader, tableBody }: Props) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-sm text-gray-900 bg-gray-300 ">
          <tr>
            {tableHeader.map((header) => (
              <th key={header} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((body, index) => (
            <tr key={body.no} className={index % 2 === 0 ? "" : "bg-gray-100 "}>
              <td className="px-6 py-4">{body.no}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <Link
                  href={`${body.link}`}
                  target="_blank"
                  className=" hover:underline"
                >
                  {body.title}
                </Link>
              </th>
              <td className="px-6 py-4">{body.summary}</td>
              <td className="px-6 py-4">{body.tags}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
