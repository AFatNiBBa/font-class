
import { Icon } from "../../index";

/**
 * A component that renders the `acorn` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=sharp-regular acorn}
 * @preview ![acorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/acorn.svg)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M259.7 48.4l13.7-19.7L233.9 1.4 220.3 21.1c-9 12.9-15.1 27.6-18.1 42.9L96 64C43 64 0 107 0 160l0 48 48 0 352 0 48 0 0-48c0-53-43-96-96-96L251.8 64c1.9-5.5 4.6-10.7 8-15.6zM352 112c26.5 0 48 21.5 48 48L48 160c0-26.5 21.5-48 48-48l256 0zM48.4 240C52.6 320.1 89.3 435.1 224 480c134.7-44.9 171.4-159.9 175.6-240l-48.1 0C347.7 305.6 319 390 224 428.8C129 390 100.3 305.6 96.5 240l-48.1 0z" />
    </Icon>
);

export default Acorn;