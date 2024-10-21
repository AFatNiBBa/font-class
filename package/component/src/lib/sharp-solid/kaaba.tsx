
import { Icon } from "../../index";

/**
 * A component that renders the `kaaba` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kaaba?s=sharp-solid kaaba}
 * @preview ![kaaba](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/kaaba.svg)
 */
const Kaaba: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0L0 96l0 32 0 15.1 0 .9 288 96 288-96 0-.9 0-15.1 0-32L288 0zm0 189.4L79.8 120 288 50.6 496.2 120 288 189.4zM0 176.9l0 46.3 5.1 1.7L64 244.5l0 33.7L0 256.9 0 416l288 96 288-96 0-159.1-64 21.3 0-33.7 58.9-19.6 5.1-1.7 0-46.3L293.1 271.2l-5.1 1.7-5.1-1.7L0 176.9zm96 112l0-33.7 96 32 0 33.7-96-32zm128 42.7l0-33.7 64 21.3 64-21.3 0 33.7-58.9 19.6-5.1 1.7-5.1-1.7L224 331.5zm160-44.4l96-32 0 33.7-96 32 0-33.7z" />
    </Icon>
);

export default Kaaba;