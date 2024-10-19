
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `vimeo-v` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vimeo-v?s=brands vimeo-v}
 * @preview ![vimeo-v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuOCAxNTMuNmMtMiA0My42LTMyLjQgMTAzLjMtOTEuNCAxNzkuMS02MC45IDc5LjItMTEyLjQgMTE4LjgtMTU0LjYgMTE4LjgtMjYuMSAwLTQ4LjItMjQuMS02Ni4zLTcyLjNDMTAwLjMgMjUwIDg1LjMgMTc0LjMgNTYuMiAxNzQuM2MtMy40IDAtMTUuMSA3LjEtMzUuMiAyMS4xTDAgMTY4LjJjNTEuNi00NS4zIDEwMC45LTk1LjcgMTMxLjgtOTguNSAzNC45LTMuNCA1Ni4zIDIwLjUgNjQuNCA3MS41IDI4LjcgMTgxLjUgNDEuNCAyMDguOSA5My42IDEyNi43IDE4LjctMjkuNiAyOC44LTUyLjEgMzAuMi02Ny42IDQuOC00NS45LTM1LjgtNDIuOC02My4zLTMxIDIyLTcyLjEgNjQuMS0xMDcuMSAxMjYuMi0xMDUuMSA0NS44IDEuMiA2Ny41IDMxLjEgNjQuOSA4OS40eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function VimeoV(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" />
        </Icon>
    </>
}