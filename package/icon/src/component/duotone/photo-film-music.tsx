
import { Icon, generic } from "../../index";

/**
 * A component that renders the `photo-film-music` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film-music?s=duotone photo-film-music}
 * @preview ![photo-film-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwwIDM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwyMjUuOSAwYzQuNC0xOC4yIDE1LjktMzMuMSAyOS42LTQzLjRjNi44LTUuMSAxNC41LTkuNCAyMi42LTEyLjZMMTkyIDM5MmMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC0yNjRMNjQgOTZDMjguNyA5NiAwIDEyNC43IDAgMTYwem01NiA4YzAtOC44IDcuMi0xNiAxNi0xNmwxNiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDE2YzAgOC44LTcuMiAxNi0xNiAxNmwtMTYgMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMTZ6bTAgOTZjMC04LjggNy4yLTE2IDE2LTE2bDE2IDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMTZjMCA4LjgtNy4yIDE2LTE2IDE2bC0xNiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0xNnptMCA5NmMwLTguOCA3LjItMTYgMTYtMTZsMTYgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAxNmMwIDguOC03LjIgMTYtMTYgMTZsLTE2IDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTE2ek0yODkuNiAyNDdjMi43IDUuNSA4LjMgOSAxNC40IDlsNjQgMCAwLTcuOWMwLTI0LjEgMTUuNC00NS41IDM4LjMtNTMuMWw5My4xLTMxLTM3LjgtNjAuNWMtMi45LTQuNy04LjEtNy41LTEzLjYtNy41cy0xMC42IDIuOC0xMy42IDcuNUwzODggMTc3LjlsLTE1LjMtMTkuN2MtMy0zLjktNy43LTYuMi0xMi42LTYuMnMtOS42IDIuMy0xMi42IDYuMmwtNTYgNzJjLTMuOCA0LjgtNC40IDExLjQtMS43IDE2Ljl6TTMyMCA0NjRjMCAyNi41IDI4LjcgNDggNjQgNDhzNjQtMjEuNSA2NC00OGwwLTE1MC43IDE0NC00OCAwIDg4LjJjLTUuMS0xLTEwLjUtMS41LTE2LTEuNWMtMzUuMyAwLTY0IDIxLjUtNjQgNDhzMjguNyA0OCA2NCA0OHM2NC0yMS41IDY0LTQ4YzAtMS41LS4xLTMtLjMtNC40Yy4yLTEuMiAuMy0yLjQgLjMtMy42bDAtMTYwIDAtNDhjMC03LjctMy43LTE1LTEwLTE5LjVzLTE0LjMtNS43LTIxLjYtMy4zbC0xOTIgNjRjLTkuOCAzLjMtMTYuNCAxMi40LTE2LjQgMjIuOGwwIDQ4IDAgMTIxLjVjLTUuMS0xLTEwLjUtMS41LTE2LTEuNWMtMzUuMyAwLTY0IDIxLjUtNjQgNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgNjRjMC0zNS4zIDI4LjctNjQgNjQtNjRMNTc2IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCA2OS42Yy0xMi45LTYuMS0yNy45LTcuMS00MS43LTIuNWwtOTguOSAzMy0zNy44LTYwLjVjLTIuOS00LjctOC4xLTcuNS0xMy42LTcuNXMtMTAuNiAyLjgtMTMuNiA3LjVMMzg4IDE3Ny45bC0xNS4zLTE5LjdjLTMtMy45LTcuNy02LjItMTIuNi02LjJzLTkuNiAyLjMtMTIuNiA2LjJsLTU2IDcyYy0zLjggNC44LTQuNCAxMS40LTEuNyAxNi45czguMyA5IDE0LjQgOWw2NCAwIDAgNjQtMTEyIDBjLTM1LjMgMC02NC0yOC43LTY0LTY0bDAtMTkyek0zMjAgOTZhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PhotoFilmMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 384c0 35.3 28.7 64 64 64l225.9 0c4.4-18.2 15.9-33.1 29.6-43.4c6.8-5.1 14.5-9.4 22.6-12.6L192 392c-17.7 0-32-14.3-32-32l0-264L64 96C28.7 96 0 124.7 0 160zm56 8c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm0 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm0 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zM289.6 247c2.7 5.5 8.3 9 14.4 9l64 0 0-7.9c0-24.1 15.4-45.5 38.3-53.1l93.1-31-37.8-60.5c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5L388 177.9l-15.3-19.7c-3-3.9-7.7-6.2-12.6-6.2s-9.6 2.3-12.6 6.2l-56 72c-3.8 4.8-4.4 11.4-1.7 16.9zM320 464c0 26.5 28.7 48 64 48s64-21.5 64-48l0-150.7 144-48 0 88.2c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48c0-1.5-.1-3-.3-4.4c.2-1.2 .3-2.4 .3-3.6l0-160 0-48c0-7.7-3.7-15-10-19.5s-14.3-5.7-21.6-3.3l-192 64c-9.8 3.3-16.4 12.4-16.4 22.8l0 48 0 121.5c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48z" />
            <path d="M192 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 69.6c-12.9-6.1-27.9-7.1-41.7-2.5l-98.9 33-37.8-60.5c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5L388 177.9l-15.3-19.7c-3-3.9-7.7-6.2-12.6-6.2s-9.6 2.3-12.6 6.2l-56 72c-3.8 4.8-4.4 11.4-1.7 16.9s8.3 9 14.4 9l64 0 0 64-112 0c-35.3 0-64-28.7-64-64l0-192zM320 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default PhotoFilmMusic;