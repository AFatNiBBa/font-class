
import { Icon } from "../../index";

/**
 * A component that renders the `acorn` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=sharp-thin acorn}
 * @preview ![acorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/acorn.svg)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M252.3 23l9.4-9.4L250.3 2.3 241 11.7C226.9 25.8 218.2 44.3 216.4 64L96 64C43 64 0 107 0 160l0 32 0 16 16 0 416 0 16 0 0-16 0-32c0-53-43-96-96-96L232.5 64c1.8-15.4 8.7-29.9 19.8-41zM352 80c44.2 0 80 35.8 80 80l0 32L16 192l0-32c0-44.2 35.8-80 80-80l256 0zM48.4 240C52.6 320.1 89.3 435.1 224 480c134.7-44.9 171.4-159.9 175.6-240l-16 0c-4.1 75.4-38.2 180.1-159.6 223.1C102.6 420.1 68.5 315.4 64.4 240l-16 0z" />
    </Icon>
);

export default Acorn;