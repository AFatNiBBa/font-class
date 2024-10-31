
import { Icon } from "../../index";

/**
 * A component that renders the `users-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-slash?s=sharp-solid users-slash}
 * @preview ![users-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/users-slash.svg)
 */
const UsersSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M202.6 134.5C215.9 120.2 224 101.1 224 80c0-44.2-35.8-80-80-80C115.8 0 90.9 14.6 76.7 36.8l-28.3-22L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L441.5 320 640 320 592 192l-148 0c2.6 10.2 4 21 4 32c0 30.1-10.4 57.7-27.7 79.5L395 283.9c13.1-16.4 21-37.2 21-59.9c0-53-43-96-96-96c-31.3 0-59.1 15-76.6 38.2l-40.8-31.7zM48 192L0 320l235.3 0c-20.6-18.2-35.3-42.8-40.8-70.8L121.9 192 48 192zM176 352L128 512l384 0-5-16.5L324.9 352 176 352zM512 160A80 80 0 1 0 512 0a80 80 0 1 0 0 160z" />
    </Icon>
);

export default UsersSlash;