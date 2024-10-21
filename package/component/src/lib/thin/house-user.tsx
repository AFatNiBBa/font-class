
import { Icon } from "../../index";

/**
 * A component that renders the `house-user` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-user?s=thin house-user}
 * @preview ![house-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/house-user.svg)
 */
const HouseUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M282.7 2c3-2.7 7.6-2.7 10.6 0l280 248c3.3 2.9 3.6 8 .7 11.3s-8 3.6-11.3 .7L512 217.1 512 448c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-230.9L13.3 262c-3.3 2.9-8.4 2.6-11.3-.7S-.6 252.9 2.7 250L282.7 2zM80 202.9L80 448c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-245.1L288 18.7 80 202.9zM288 272a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM192 400l192 0c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64zm-16 0c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default HouseUser;