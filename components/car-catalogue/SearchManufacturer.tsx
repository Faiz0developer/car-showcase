import { ManufacturerProps } from "@/types";
import { Combobox, ComboboxButton } from "@headlessui/react";
import Image from "next/image";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: ManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <ComboboxButton className="absolute top-[14px]">
          <Image
            src="/car-logo.svg"
            width={20}
            height={20}
            className="ml-4"
            alt="Car Logo"
          />
        </ComboboxButton>
        
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
