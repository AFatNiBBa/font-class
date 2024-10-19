
import { Icon } from "../../index";

/**
 * A component that renders the `meter-fire` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-fire?s=thin meter-fire}
 * @preview ![meter-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE2Yzg2LjkgMCAxNjMgNDYuMiAyMDUuMSAxMTUuNGM1IDIgOS42IDQuOSAxMy44IDguNmM1LjYgNS4xIDExLjEgMTAuMiAxNi42IDE1LjVDNDUyLjUgNjQuMSAzNjEuNyAwIDI1NiAwQzExNC42IDAgMCAxMTQuNiAwIDI1NlMxMTQuNiA1MTIgMjU2IDUxMmMzMy42IDAgNjUuNy02LjUgOTUuMS0xOC4zYy00LjMtMy45LTguNC04LjEtMTIuMy0xMi40QzMxMyA0OTAuOCAyODUuMSA0OTYgMjU2IDQ5NkMxMjMuNSA0OTYgMTYgMzg4LjUgMTYgMjU2UzEyMy41IDE2IDI1NiAxNnpNMzg0IDE2MGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDMyYzAgMTMuMiA3LjkgMjQuNSAxOS4zIDI5LjRjMy4yLTQuNSA2LjYtOS4xIDEwLTEzLjZjLTcuNi0xLjMtMTMuMy03LjktMTMuMy0xNS44bDAtMzJjMC04LjggNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNmwwIDI0LjljNS4xLTUuOSAxMC41LTExLjggMTYtMTcuNWwwLTcuNHptLTIwOCAwbDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC0zMmMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2em0tNDggMGwwIDMyYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC0zMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnptMTQ0IDMyYzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2bDAtMzJjMC04LjggNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNmwwIDMyem0tMTYtNjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgMzJjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyem0xODkuNSA0OGMxLjUgMCAyLjkgLjUgNCAxLjVjMTYuMSAxNC42IDMxLjMgMzAuMSA0NS42IDQ2LjhjNi42IDcuNiAxOC40IDcuNSAyNC44LS4zYzUuOC03IDExLjktMTMuOSAxOC4yLTE5LjZjMi4zLTIuMSA1LjktMi4xIDguMiAwYzE4LjkgMTcuNCAzOC40IDQxLjIgNTMuMiA2Ny4yYzE0LjggMjYuMSAyNC41IDU0IDI0LjUgNzkuN2MwIDQ5LjctMjUuMSA5My43LTYzLjQgMTE5LjhjOS43LTE0IDE1LjQtMzAuNyAxNS40LTQ4LjdjMC01Ny40LTYzLjgtMTEwLjUtODcuNC0xMjguMmMtNS4yLTMuOS0xMi4xLTMuOS0xNy4zIDBDNDQ3LjggMzEyLjEgMzg0IDM2NS4yIDM4NCA0MjIuNmMwIDE4LjIgNS44IDM1IDE1LjcgNDkuMmMtMzguNy0yNi02My43LTcwLjMtNjMuNy0xMjAuM2MwLTMyLjMgMTQuMS02NC45IDM0LjctOTUuMmMyMC41LTMwLjIgNDctNTcuNCA3MC44LTc4LjdjMS4xLTEgMi42LTEuNSA0LjEtMS41ek00ODAgNDk2Yy0yLjcgMC01LjUtLjEtOC4yLS4yYy00MS4yLTMuOC03MS44LTM2LTcxLjgtNzMuMmMwLTIzIDEzLTQ3IDMxLjEtNjguN2MxNy4zLTIwLjcgMzcuNC0zNy4yIDQ4LjktNDUuOWMxMS41IDguNyAzMS42IDI1LjIgNDguOSA0NS45QzU0NyAzNzUuNSA1NjAgMzk5LjUgNTYwIDQyMi42YzAgMzcuMi0zMC42IDY5LjQtNzEuNyA3My4yYy0yLjcgLjItNS41IC4yLTguMyAuMnpNMzIwIDM1MS40YzAgODUuMSA2NS41IDE1NS42IDE1MC44IDE2MC4zYzMgLjMgNi4xIC40IDkuMiAuNGMzLjIgMCA2LjMtLjEgOS40LS40QzU3My43IDUwNi45IDY0MCA0MzYuNSA2NDAgMzUxLjRjMC0yOS41LTExLTYwLjEtMjYuNi04Ny42Yy0xNS42LTI3LjYtMzYuMi01Mi42LTU2LjMtNzEuMWMtOC40LTcuNy0yMS40LTcuOC0yOS44LS4xYy03LjEgNi41LTEzLjggMTQtMTkuNyAyMS4zYzAgMC0uMSAwLS4xIC4xcy0uMSAwLS4xIDBzLS4xIDAtLjEgMGMwIDAgMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBjLTE0LjgtMTcuMi0zMC41LTMzLjItNDctNDguM2MtNC4yLTMuOC05LjQtNS42LTE0LjYtNS43Yy01LjMgMC0xMC42IDEuOC0xNC45IDUuNmMtMjQuMyAyMS44LTUxLjggNTAtNzMuMyA4MS42QzMzNiAyNzguOCAzMjAgMzE0LjYgMzIwIDM1MS40eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MeterFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 16c86.9 0 163 46.2 205.1 115.4c5 2 9.6 4.9 13.8 8.6c5.6 5.1 11.1 10.2 16.6 15.5C452.5 64.1 361.7 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c33.6 0 65.7-6.5 95.1-18.3c-4.3-3.9-8.4-8.1-12.3-12.4C313 490.8 285.1 496 256 496C123.5 496 16 388.5 16 256S123.5 16 256 16zM384 160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32c0 13.2 7.9 24.5 19.3 29.4c3.2-4.5 6.6-9.1 10-13.6c-7.6-1.3-13.3-7.9-13.3-15.8l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 24.9c5.1-5.9 10.5-11.8 16-17.5l0-7.4zm-208 0l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16zm-48 0l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32zm144 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32zm-16-64c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-17.7-14.3-32-32-32zm189.5 48c1.5 0 2.9 .5 4 1.5c16.1 14.6 31.3 30.1 45.6 46.8c6.6 7.6 18.4 7.5 24.8-.3c5.8-7 11.9-13.9 18.2-19.6c2.3-2.1 5.9-2.1 8.2 0c18.9 17.4 38.4 41.2 53.2 67.2c14.8 26.1 24.5 54 24.5 79.7c0 49.7-25.1 93.7-63.4 119.8c9.7-14 15.4-30.7 15.4-48.7c0-57.4-63.8-110.5-87.4-128.2c-5.2-3.9-12.1-3.9-17.3 0C447.8 312.1 384 365.2 384 422.6c0 18.2 5.8 35 15.7 49.2c-38.7-26-63.7-70.3-63.7-120.3c0-32.3 14.1-64.9 34.7-95.2c20.5-30.2 47-57.4 70.8-78.7c1.1-1 2.6-1.5 4.1-1.5zM480 496c-2.7 0-5.5-.1-8.2-.2c-41.2-3.8-71.8-36-71.8-73.2c0-23 13-47 31.1-68.7c17.3-20.7 37.4-37.2 48.9-45.9c11.5 8.7 31.6 25.2 48.9 45.9C547 375.5 560 399.5 560 422.6c0 37.2-30.6 69.4-71.7 73.2c-2.7 .2-5.5 .2-8.3 .2zM320 351.4c0 85.1 65.5 155.6 150.8 160.3c3 .3 6.1 .4 9.2 .4c3.2 0 6.3-.1 9.4-.4C573.7 506.9 640 436.5 640 351.4c0-29.5-11-60.1-26.6-87.6c-15.6-27.6-36.2-52.6-56.3-71.1c-8.4-7.7-21.4-7.8-29.8-.1c-7.1 6.5-13.8 14-19.7 21.3c0 0-.1 0-.1 .1s-.1 0-.1 0s-.1 0-.1 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-14.8-17.2-30.5-33.2-47-48.3c-4.2-3.8-9.4-5.6-14.6-5.7c-5.3 0-10.6 1.8-14.9 5.6c-24.3 21.8-51.8 50-73.3 81.6C336 278.8 320 314.6 320 351.4z" />
    </Icon>
);

export default MeterFire;