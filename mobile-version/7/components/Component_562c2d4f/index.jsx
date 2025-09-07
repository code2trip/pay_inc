import { Button } from "@mui/base";
import Component_abefbb9f from "../Component_abefbb9f";
import SvgIcon_4a4d1bef from "./icons/SvgIcon_4a4d1bef";

function Component_562c2d4f() {
  return (
    <div className="box-border flex justify-center items-center flex-col gap-5 self-stretch grow-0 shrink-0 basis-auto">
      <p className="[font-family:Montserrat,sans-serif] text-sm font-medium text-center leading-[17px] text-[white] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">
        Leave your email and comments
        <br />— we&apos;ll contact you with details
      </p>
      <Component_abefbb9f />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="[background:linear-gradient(180deg,rgba(0,184,168,1)_0%,rgba(0,82,75,1)_172.12%_)] bg-transparent shadow-[0px_1px_1px_rgba(0,0,0,0.10),0px_2px_2px_rgba(0,0,0,0.09),0px_5px_3px_rgba(0,0,0,0.05),0px_10px_4px_rgba(0,0,0,0.01),0px_15px_4px_rgba(0,0,0,0.00)] [font-family:Montserrat,sans-serif] text-base font-semibold uppercase text-[white] min-w-[310px] h-[52px] w-[310px] cursor-pointer inline-flex items-center justify-center gap-2 box-border self-stretch grow-0 shrink-0 basis-auto rounded-2xl border-[none]">
        send
        <SvgIcon_4a4d1bef className="w-6 h-6 flex" />
      </Button>
    </div>
  );
}

export default Component_562c2d4f;
