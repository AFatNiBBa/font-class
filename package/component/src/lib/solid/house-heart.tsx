
import { Icon } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=solid house-heart}
 * @preview ![house-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/house-heart.svg)
 */
const HouseHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 160.4c0 35.3 28.7 64 64 64l320.4 0c35.5 0 64.2-28.8 64-64.3l-.7-160.2 32 0zM176 269.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z" />
    </Icon>
);

export default HouseHeart;