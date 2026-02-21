"use client";

import { Column } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
interface ColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
  options: string[];
}

export function ColumnFilter<TData, TValue>({
  column,
  options,
}: ColumnFilterProps<TData, TValue>) {
  const [selectedValue, setSelectedValue] = useState("_all_");

  useEffect(() => {
    const filterValue = column.getFilterValue() as string;
    if (filterValue) {
      setSelectedValue(filterValue);
    }
  }, [column]);

  return (
    <Select
      value={selectedValue}
      onValueChange={(value) => {
        setSelectedValue(value);
        column.setFilterValue(value === "_all_" ? undefined : value);
      }}
    >
      <SelectTrigger className="w-[120px] h-8">
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="_all_">{"all"}</SelectItem>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
