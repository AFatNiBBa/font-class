
import { Icon } from "../../index";

/**
 * A component that renders the `hashnode` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashnode?s=brands hashnode}
 * @preview ![hashnode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/hashnode.svg)
 */
const Hashnode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M35.19 171.1C-11.72 217.1-11.72 294 35.19 340.9L171.1 476.8C217.1 523.7 294 523.7 340.9 476.8L476.8 340.9C523.7 294 523.7 217.1 476.8 171.1L340.9 35.19C294-11.72 217.1-11.72 171.1 35.19L35.19 171.1zM315.5 315.5C282.6 348.3 229.4 348.3 196.6 315.5C163.7 282.6 163.7 229.4 196.6 196.6C229.4 163.7 282.6 163.7 315.5 196.6C348.3 229.4 348.3 282.6 315.5 315.5z" />
    </Icon>
);

export default Hashnode;