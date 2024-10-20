
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=solid paper-plane}
 * @preview ![paper-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/paper-plane.svg)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
    </Icon>
);

export default PaperPlane;