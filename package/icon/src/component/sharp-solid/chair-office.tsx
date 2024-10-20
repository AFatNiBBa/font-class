
import { Icon } from "../../index";

/**
 * A component that renders the `chair-office` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair-office?s=sharp-solid chair-office}
 * @preview ![chair-office](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chair-office.svg)
 */
const ChairOffice: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 0L96 0l0 256 256 0L352 0zM64 160l0-32L0 128l0 32 0 64 0 32 64 0 0-32 0-64zm384 0l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64zM256 384l160 0 0-32-32-64L64 288 32 352l0 32 160 0 0 64-32 0-32 0 0 64 32 0 64 0 64 0 32 0 0-64-32 0-32 0 0-64z" />
    </Icon>
);

export default ChairOffice;