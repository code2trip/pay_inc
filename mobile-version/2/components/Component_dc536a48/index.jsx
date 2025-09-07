import Component_a091697b from "../Component_a091697b";
import SvgIcon_f7f57bae from "./icons/SvgIcon_f7f57bae";
import SvgIcon_e30df040 from "./icons/SvgIcon_e30df040";

function Component_dc536a48() {
  return (
    <div className="box-border flex justify-center items-center flex-col gap-2 w-[239px] grow-0 shrink-0 basis-auto">
      <div className="box-border flex justify-start items-start flex-row gap-2 grow-0 shrink-0 basis-auto">
        <SvgIcon_f7f57bae className="w-5 h-5 flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
        <p className="[font-family:Montserrat,sans-serif] text-sm font-medium uppercase text-[white] grow-0 shrink-0 basis-auto m-0 p-0">+1 (123) 456-7890</p>
      </div>
      <div className="box-border flex justify-start items-end flex-row gap-2 grow-0 shrink-0 basis-auto">
        <SvgIcon_e30df040 className="w-5 h-5 flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
        <p className="[font-family:Montserrat,sans-serif] text-sm font-medium text-[white] grow-0 shrink-0 basis-auto m-0 p-0">info@payinc.com</p>
      </div>
      <Component_a091697b />
    </div>
  );
}

export default Component_dc536a48;
