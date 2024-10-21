
import { Icon } from "../../index";

/**
 * A component that renders the `outdent` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outdent?s=regular outdent}
 * @preview ![outdent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/outdent.svg)
 */
const Outdent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 50.7 10.7 40 24 40l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 88C10.7 88 0 77.3 0 64zM192 192c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24zm24 104l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 448c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 472c-13.3 0-24-10.7-24-24zM7 268.4C-.8 262-.8 250 7 243.6l94.8-78.1c10.4-8.6 26.2-1.2 26.2 12.4l0 156.2c0 13.5-15.7 20.9-26.2 12.4L7 268.4z" />
    </Icon>
);

export default Outdent;