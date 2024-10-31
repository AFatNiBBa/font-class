
import { Icon } from "../../index";

/**
 * A component that renders the `star-of-david` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-david?s=sharp-light star-of-david}
 * @preview ![star-of-david](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/star-of-david.svg)
 */
const StarOfDavid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M476 352l20 32-37.7 0L336 384l-61.1 97.8L256 512l-18.9-30.2L176 384 53.7 384 16 384l20-32 60-96L36 160 16 128l37.7 0L176 128l61.1-97.8L256 0l18.9 30.2L336 128l122.3 0 37.7 0-20 32-60 96 60 96zM397.1 225.8L438.3 160 356 160l41.1 65.8zM318.3 160l-124.5 0-60 96 60 96 124.5 0 60-96-60-96zm-20-32L256 60.4 213.7 128l84.5 0zM156 160l-82.3 0 41.1 65.8L156 160zM114.9 286.2L73.7 352l82.3 0-41.1-65.8zM356 352l82.3 0-41.1-65.8L356 352zM213.7 384L256 451.6 298.3 384l-84.5 0z" />
    </Icon>
);

export default StarOfDavid;