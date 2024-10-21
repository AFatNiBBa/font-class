
import { Icon } from "../../index";

/**
 * A component that renders the `elevator` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elevator?s=sharp-solid elevator}
 * @preview ![elevator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/elevator.svg)
 */
const Elevator: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 80l0 16 160 0 0-16L144 0 64 80zm448 48L0 128 0 512l512 0 0-384zM160 224a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM80 448l24-96 112 0 24 96L80 448zm328-96l24 96-160 0 24-96 112 0zM304 272a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM368 96l80-80 0-16L288 0l0 16 80 80z" />
    </Icon>
);

export default Elevator;