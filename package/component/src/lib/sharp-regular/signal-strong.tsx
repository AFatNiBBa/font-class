
import { Icon } from "../../index";

/**
 * A component that renders the `signal-strong` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-strong?s=sharp-regular signal-strong}
 * @preview ![signal-strong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/signal-strong.svg)
 */
const SignalStrong: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M472 96l0 24 0 368 0 24-48 0 0-24 0-368 0-24 48 0zM344 192l0 24 0 272 0 24-48 0 0-24 0-272 0-24 48 0zM216 288l0 24 0 176 0 24-48 0 0-24 0-176 0-24 48 0zM88 384l0 24 0 80 0 24-48 0 0-24 0-80 0-24 48 0z" />
    </Icon>
);

export default SignalStrong;