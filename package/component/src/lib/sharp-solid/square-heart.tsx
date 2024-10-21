
import { Icon } from "../../index";

/**
 * A component that renders the `square-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-heart?s=sharp-solid square-heart}
 * @preview ![square-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-heart.svg)
 */
const SquareHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM103.2 287.1c-14.9-14.9-23.2-35-23.2-56l0-3.6c0-41.8 33.9-75.6 75.6-75.6c23 0 44.7 10.4 59.1 28.4l9.3 11.6 9.3-11.6c14.4-17.9 36.1-28.4 59.1-28.4c41.8 0 75.6 33.9 75.6 75.6l0 3.6c0 21-8.3 41.1-23.2 56L320 311.9l-96 96-96-96-24.8-24.8z" />
    </Icon>
);

export default SquareHeart;