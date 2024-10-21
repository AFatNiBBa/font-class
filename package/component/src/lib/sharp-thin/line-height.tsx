
import { Icon } from "../../index";

/**
 * A component that renders the `line-height` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-height?s=sharp-thin line-height}
 * @preview ![line-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/line-height.svg)
 */
const LineHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M101.4 42.1L96 37.2l-5.4 4.8-80 72-5.9 5.4 10.7 11.9 5.9-5.4L88 66 88 446l-66.6-60-5.9-5.4L4.7 392.6l5.9 5.4 80 72 5.4 4.8 5.4-4.8 80-72 5.9-5.4-10.7-11.9-5.9 5.4L104 446 104 66l66.6 60 5.9 5.4 10.7-11.9-5.9-5.4-80-72zM264 88l-8 0 0 16 8 0 304 0 8 0 0-16-8 0L264 88zm-8 160l-8 0 0 16 8 0 312 0 8 0 0-16-8 0-312 0zm0 160l0 16 8 0 304 0 8 0 0-16-8 0-304 0-8 0z" />
    </Icon>
);

export default LineHeight;