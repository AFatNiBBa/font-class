
import { Icon } from "../../index";

/**
 * A component that renders the `calculator` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calculator?s=sharp-regular calculator}
 * @preview ![calculator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calculator.svg)
 */
const Calculator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 176L48 176l0 288 288 0 0-288zm0-48l0-80L48 48l0 80 288 0zm48 0l0 24 0 24 0 288 0 48-48 0L48 512 0 512l0-48L0 176l0-24 0-24L0 48 0 0 48 0 336 0l48 0 0 48 0 80zM80 208l48 0 0 48-48 0 0-48zm48 88l0 48-48 0 0-48 48 0zM80 384l136 0 0 48L80 432l0-48zM216 208l0 48-48 0 0-48 48 0zm-48 88l48 0 0 48-48 0 0-48zm136-88l0 48-48 0 0-48 48 0zm-48 88l48 0 0 48-48 0 0-48zm48 88l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Calculator;