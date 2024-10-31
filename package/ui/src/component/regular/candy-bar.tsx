
import { Icon } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=regular candy-bar}
 * @preview ![candy-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/candy-bar.svg)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 320l0-96 128 0 0 96L0 320zm0 64l0-32 128 0 0 96-64 0c-35.3 0-64-28.7-64-64zm288 64l-128 0 0-96 128 0 0-32-128 0 0-96 128 0 0-32-128 0 0-128 128 0 48 0 240 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-240 0-48 0zM36.7 177C43.9 165 48 151 48 136c0-4-.3-7.9-.9-11.7c-1-7 6.2-14.2 13.1-13.1c3.8 .6 7.7 .9 11.7 .9c15 0 29-4.1 41-11.3c6.1-3.6 15 .4 15 7.4l0 51.8s0 0 0 0l0 32-8 0s0 0 0 0l-75.8 0c-7.1 0-11.1-9-7.4-15zM336 112l0 288 240 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-240 0z" />
    </Icon>
);

export default CandyBar;