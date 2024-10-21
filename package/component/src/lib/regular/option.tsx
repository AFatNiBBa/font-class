
import { Icon } from "../../index";

/**
 * A component that renders the `option` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=regular option}
 * @preview ![option](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/option.svg)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M172.1 120.4c-4.6-5.3-11.2-8.4-18.2-8.4L24 112C10.7 112 0 101.3 0 88S10.7 64 24 64l129.9 0c21 0 41 9.2 54.7 25.1L467.9 391.6c4.6 5.3 11.2 8.4 18.2 8.4L616 400c13.3 0 24 10.7 24 24s-10.7 24-24 24l-129.9 0c-21 0-41-9.2-54.7-25.1L172.1 120.4zM616 64c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0z" />
    </Icon>
);

export default Option;