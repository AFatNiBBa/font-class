
import { Icon } from "../../index";

/**
 * A component that renders the `input-numeric` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-numeric?s=thin input-numeric}
 * @preview ![input-numeric](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/input-numeric.svg)
 */
const InputNumeric: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 80c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l512 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm40 112c0 4.4 3.6 8 8 8l24 0 0 144-24 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-152c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8zm154.5 22.3c12.3-14.7 34.2-16.4 48.7-3.8c14.1 12.4 15.6 33.8 3.3 48L234 330.8c-2.1 2.4-2.5 5.7-1.2 8.6s4.1 4.7 7.3 4.7l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-78.5 0 65.1-75.1c18.1-20.8 15.9-52.4-4.9-70.5c-21.2-18.5-53.5-16-71.5 5.6l-12.4 14.9c-2.8 3.4-2.4 8.4 1 11.3s8.4 2.4 11.3-1l12.4-14.9z" />
    </Icon>
);

export default InputNumeric;