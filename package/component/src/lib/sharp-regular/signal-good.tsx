
import { Icon } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=sharp-regular signal-good}
 * @preview ![signal-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/signal-good.svg)
 */
const SignalGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344 192l0 24 0 272 0 24-48 0 0-24 0-272 0-24 48 0zM216 288l0 24 0 176 0 24-48 0 0-24 0-176 0-24 48 0zM88 384l0 24 0 80 0 24-48 0 0-24 0-80 0-24 48 0z" />
    </Icon>
);

export default SignalGood;