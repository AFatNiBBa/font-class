
import { Icon } from "../../index";

/**
 * A component that renders the `acorn` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=sharp-light acorn}
 * @preview ![acorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/acorn.svg)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M263.4 31.2l3.9-3.9L244.7 4.7l-3.9 3.9C225.5 23.9 215.1 43.2 210.5 64L96 64C43 64 0 107 0 160l0 16 0 32 32 0 384 0 32 0 0-32 0-16c0-53-43-96-96-96L243.6 64c3.8-12.3 10.6-23.6 19.8-32.8zM352 96c35.3 0 64 28.7 64 64l0 16L32 176l0-16c0-35.3 28.7-64 64-64l256 0zM48.4 240C52.6 320.1 89.3 435.1 224 480c134.7-44.9 171.4-159.9 175.6-240l-32 0c-4 70.6-35.4 165.1-143.5 206C115.8 405.1 84.4 310.6 80.5 240l-32 0z" />
    </Icon>
);

export default Acorn;