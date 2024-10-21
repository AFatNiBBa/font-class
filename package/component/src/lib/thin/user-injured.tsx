
import { Icon } from "../../index";

/**
 * A component that renders the `user-injured` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-injured?s=thin user-injured}
 * @preview ![user-injured](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-injured.svg)
 */
const UserInjured: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 128c0-8.2-.9-16.3-2.6-24L192 104l-77.4 0c-1.7 7.7-2.6 15.8-2.6 24c0 61.9 50.1 112 112 112s112-50.1 112-112zm-7.4-40c-10.3-26.8-30.6-48.7-56.3-61l-61 61 117.3 0zM256 20.6c-10.2-3-20.9-4.6-32-4.6c-47.8 0-88.5 29.9-104.6 72l69.3 0L256 20.6zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM16 482.3c0 7.6 6.1 13.7 13.7 13.7L80 496l0-142.9c-38.9 29.6-64 76.5-64 129.1zM96 344l0 152 72 0 16 0 43.7 0 21.5 0L137.8 325.1c-14.9 3.8-29 9.7-41.9 17.4c.1 .5 .1 1 .1 1.5zM296 496c22.1 0 40-17.9 40-40s-17.9-40-40-40l-79.8 0 52.2 80 27.7 0zm0-96c30.9 0 56 25.1 56 56c0 15.7-6.4 29.8-16.8 40l83.1 0c7.6 0 13.7-6.1 13.7-13.7C432 392.7 359.3 320 269.7 320l-91.4 0c-8 0-15.9 .6-23.6 1.7L205.7 400l90.3 0zM418.3 512L296 512l-120 0-8 0L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7z" />
    </Icon>
);

export default UserInjured;