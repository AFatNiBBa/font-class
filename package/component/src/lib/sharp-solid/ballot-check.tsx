
import { Icon } from "../../index";

/**
 * A component that renders the `ballot-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot-check?s=sharp-solid ballot-check}
 * @preview ![ballot-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ballot-check.svg)
 */
const BallotCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 0L0 0 0 512l448 0L448 0zM64 96l64 0 0 64-64 0 0-64zm64 256l0 64-64 0 0-64 64 0zm80 16l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zM192 112l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm16 128l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm-41.4-16l-11.3 11.3-48 48L96 294.6 84.7 283.3l-24-24L49.4 248 72 225.4l11.3 11.3L96 249.4l36.7-36.7L144 201.4 166.6 224z" />
    </Icon>
);

export default BallotCheck;