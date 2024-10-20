
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=thin indent}
 * @preview ![indent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/indent.svg)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 72c-4.4 0-8-3.6-8-8zM192 192c0-4.4 3.6-8 8-8l240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-240 0c-4.4 0-8-3.6-8-8zm8 120l240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-240 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM0 448c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 456c-4.4 0-8-3.6-8-8zM110.8 256L16 177.9l0 156.2L110.8 256zM121 243.6c7.8 6.4 7.8 18.3 0 24.7L26.2 346.4C15.7 355 0 347.6 0 334.1L0 177.9c0-13.5 15.7-20.9 26.2-12.4L121 243.6z" />
    </Icon>
);

export default Indent;