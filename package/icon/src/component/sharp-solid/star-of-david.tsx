
import { Icon } from "../../index";

/**
 * A component that renders the `star-of-david` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-david?s=sharp-solid star-of-david}
 * @preview ![star-of-david](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/star-of-david.svg)
 */
const StarOfDavid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 400l56 0 91.3 0L232 512l48 0 68.7-112 91.3 0 56 0 0-48-4.9-8-54-88 54-88 4.9-8 0-48-56 0-91.3 0L280 0 232 0 163.3 112 72 112l-56 0 0 48 4.9 8 54 88-54 88L16 352l0 48zm91.8-90.5L128.9 344l-42.3 0 21.1-34.5zM194.6 344l-54-88 54-88 122.8 0 54 88-54 88-122.8 0zM229 400l54 0-27 44-27-44zm154.1-56l21.1-34.5L425.4 344l-42.3 0zm21.1-141.5L383.1 168l42.3 0-21.1 34.5zM283 112l-54 0 27-44 27 44zM128.9 168l-21.1 34.5L86.6 168l42.3 0z" />
    </Icon>
);

export default StarOfDavid;