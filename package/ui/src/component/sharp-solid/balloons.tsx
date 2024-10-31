
import { Icon } from "../../index";

/**
 * A component that renders the `balloons` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloons?s=sharp-solid balloons}
 * @preview ![balloons](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/balloons.svg)
 */
const Balloons: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 160C320 71.6 248.4 0 160 0S0 71.6 0 160C0 272 128 368 128 368L96 448l128 0-32-80s128-96 128-208zM160 96c-35.3 0-64 28.7-64 64l-32 0c0-53 43-96 96-96l0 32zM448 432l-32 80 128 0-32-80s128-96 128-208c0-88.4-71.6-160-160-160c-53.7 0-101.2 26.4-130.2 67c1.4 9.5 2.2 19.2 2.2 29c0 37-11.4 71.6-27.3 101.9C347.7 356.8 448 432 448 432zM416 224l-32 0c0-53 43-96 96-96l0 32c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default Balloons;