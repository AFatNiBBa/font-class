
import { Icon } from "../../index";

/**
 * A component that renders the `raccoon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raccoon?s=thin raccoon}
 * @preview ![raccoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/raccoon.svg)
 */
const Raccoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M276.7 44l-54 65.6 44-24.7c26.1-14.7 58.2-2.7 69.2 23.6c11.1-26.2 43.2-38.2 69.2-23.6l44 24.7L395.3 44C380.7 26.3 358.9 16 336 16s-44.7 10.3-59.3 28zM336 146.7c-3.1 7.4-8 14-14.5 19.2l-51.6 41.3c6.7 3 13.2 6.6 19.4 10.7l15 10c-.2-1.3-.2-2.6-.2-3.9c0-17.7 14.3-32 32-32s32 14.3 32 32c0 1.3-.1 2.6-.2 3.9l15-10c6.2-4.1 12.6-7.7 19.4-10.7l-51.6-41.3c-6.5-5.2-11.4-11.8-14.5-19.2zm0 93.3a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 16c-12 0-23.8-3.6-33.8-10.2l-21.9-14.6c-8-5.3-16.6-9.7-25.6-12.9l-48.7-17.7C188 194 176 176.8 176 157.5c0-10.6 3.7-20.9 10.4-29.1l28.1-34.2L194.8 48.2c-1.8-4.3-2.8-8.9-2.8-13.6C192 15.5 207.5 0 226.6 0l1 0c3.8 0 7.6 .6 11.2 1.8l44.3 14.8C298.4 5.9 316.9 0 336 0s37.6 5.9 52.9 16.6L433.2 1.8C436.9 .6 440.6 0 444.5 0l1 0C464.5 0 480 15.5 480 34.6c0 4.7-1 9.3-2.8 13.6L457.4 94.3l28.1 34.2c6.7 8.2 10.4 18.5 10.4 29.1c0 19.2-12 36.4-30.1 43l-48.7 17.7c-9 3.3-17.6 7.6-25.6 12.9l-21.9 14.6C359.8 252.4 348 256 336 256zm83.4-55.6l41-14.9c11.8-4.3 19.6-15.5 19.6-28c0-5.2-1.3-10.2-3.9-14.7l-.1 .1L397.4 98.7c-19.6-11-44.2 .3-48.6 22.3c-2.4 12.1 2.1 24.6 11.8 32.3l58.8 47.1zM311.5 153.4c9.7-7.7 14.2-20.2 11.8-32.3c-4.4-22-29.1-33.4-48.6-22.3L195.9 143l-.1-.1c-2.5 4.4-3.9 9.5-3.9 14.7c0 12.5 7.8 23.7 19.6 28l41 14.9 58.8-47.1zM233.7 17c-2-.7-4.1-1-6.2-1l-1 0C216.3 16 208 24.3 208 34.6c0 2.5 .5 5 1.5 7.3L226 80.4l38.4-46.6c1.4-1.7 2.9-3.4 4.5-5.1L233.7 17zM407.6 33.8L446 80.4l16.5-38.5c1-2.3 1.5-4.8 1.5-7.3c0-10.2-8.3-18.6-18.6-18.6l-1 0c-2.1 0-4.2 .3-6.2 1L403.1 28.7c1.6 1.6 3 3.3 4.5 5.1zM128 274.7c17.5-22.6 39.9-41.2 65.7-54.2c4.4 2.4 9 4.3 13.9 5.8l7.3 2.2C149.9 254.3 104 317.8 104 392l0 8c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8c0-19.5 2.9-38.3 8.3-56L16 336l0 72c0 48.6 39.4 88 88 88l232 0 0-24c0-22.1-17.9-40-40-40l-48 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l48 0c30.9 0 56 25.1 56 56l0 24 112 0 0-24c0-22.1-17.9-40-40-40l-16 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l16 0c30.9 0 56 25.1 56 56l0 32c0 4.4-3.6 8-8 8l-368 0C46.6 512 0 465.4 0 408L0 96C0 60.7 28.7 32 64 32s64 28.7 64 64l0 178.7zm336 16c0-22.4-11.4-43.2-30-55.3l18.8-5.7c17.1 15.4 27.2 37.5 27.2 61c0 26-12.3 50.4-33.2 65.9l-30.6 22.7c-15.9 11.8-38.1 10.1-52.1-3.9c-17-17-15.4-45.1 3.7-59.9l43.4-33.7c3.5-2.7 8.5-2.1 11.2 1.4s2.1 8.5-1.4 11.2l-43.4 33.7c-11.4 8.8-12.4 25.8-2.2 36c8.4 8.4 21.8 9.4 31.3 2.4l30.6-22.7c16.8-12.4 26.7-32.1 26.7-53zM102 320c2.9-7.2 6.3-14.3 10-21l0-59-96 0 0 80 86 0zm10-176l-96 0 0 80 96 0 0-80zm0-16l0-32c0-26.5-21.5-48-48-48S16 69.5 16 96l0 32 96 0zM308 375.3l-.5 .5c-13.8 13.8-35.6 15.6-51.5 4.3l-52.7-37.5c-3.6-2.6-4.4-7.6-1.9-11.2s7.6-4.4 11.2-1.9L265.3 367c9.5 6.8 22.6 5.7 30.9-2.6l.5-.5c10.2-10.2 9.2-27.1-2.2-35.9l-43.4-33.7c-3.5-2.7-4.1-7.7-1.4-11.2s7.7-4.1 11.2-1.4l43.4 33.7c19 14.8 20.7 42.8 3.7 59.9zM272 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Raccoon;