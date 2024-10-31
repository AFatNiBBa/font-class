
import { Icon } from "../../index";

/**
 * A component that renders the `burger-glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-glass?s=sharp-thin burger-glass}
 * @preview ![burger-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/burger-glass.svg)
 */
const BurgerGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M29.8 176l25 320L272 496l0 8.2c0 2.7 .3 5.3 .8 7.8L40 512 1.3 16 0 0 16 0 368 0l16 0-1.3 16L369.3 188.4c-5.9 2.8-11.5 5.9-16.8 9.1l1.7-21.6L29.8 176zm-1.2-16l326.9 0L366.7 16 17.3 16 28.5 160zM304 303.8s32-104 160-104s160 104 160 104l0 32 16 0 0 16 0 64 0 16-16 0 0 72c0 4.4-3.6 8-8 8l-304 0c-4.4 0-8-3.6-8-8l0-72-16 0 0-16 0-64 0-16 16 0 0-32zm304 2.7c0-.1-.1-.2-.1-.3c-.1-.3-.2-.6-.4-1c-1-2.4-2.5-6-4.7-10.4c-4.5-8.8-11.7-20.5-22.5-32.2C558.9 239.6 523 215.8 464 215.8s-94.9 23.7-116.2 46.9c-10.8 11.7-18 23.4-22.5 32.2c-2.2 4.4-3.8 7.9-4.7 10.4c-.2 .5-.4 .9-.5 1.3l0 29.3 288 0 0-29.3zM304 415.8l8 0 304 0 8 0 0-64-16 0-288 0-16 0 0 64zm16 16l0 64 288 0 0-64-288 0zm74-168a10 10 0 1 1 -20 0 10 10 0 1 1 20 0zm70-6a10 10 0 1 1 0-20 10 10 0 1 1 0 20zm90 6a10 10 0 1 1 -20 0 10 10 0 1 1 20 0z" />
    </Icon>
);

export default BurgerGlass;