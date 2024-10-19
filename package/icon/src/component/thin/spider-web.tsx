
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `spider-web` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spider-web?s=thin spider-web}
 * @preview ![spider-web](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDkuNjY4IDI1MC4yNTRMNTQ2Ljk0OSAyNDcuNTMzQzQ4Ni45MzYgMTg3LjUxIDQ0NC4zNDIgMTEyLjI2NCA0MjMuNzY0IDI5Ljg4OUM0MjMuNzU2IDI5Ljg1NyA0MjMuNzE3IDI5Ljg0NiA0MjMuNzA5IDI5LjgxNEM0MjMuNDYzIDI4Ljg2NSA0MjIuNTYzIDI4LjI4NSA0MjEuOTgyIDI3LjQ4QzQyMS4zNTUgMjYuNjEzIDQyMS4wNDUgMjUuNTEgNDIwLjEwNyAyNC45NDlDNDIwLjA3NiAyNC45MyA0MjAuMDM1IDI0Ljk1MSA0MjAuMDA0IDI0LjkzNEM0MTkuOTg0IDI0LjkyMiA0MTkuOTg2IDI0Ljg5OCA0MTkuOTY3IDI0Ljg4N0M0MTkuMDc2IDI0LjM4MSA0MTguMTA1IDI0LjY2OCA0MTcuMTUgMjQuNTIxQzQxNi4xMDQgMjQuMzYxIDQxNS4xMDcgMjMuODAxIDQxNC4wNjEgMjQuMDc0TDQxMy45MzkgMjQuMTA1QzQxMy45MDYgMjQuMTEzIDQxMy44ODEgMjQuMTE5IDQxMy44NDYgMjQuMTI5TDQwMS41OTIgMjcuMTk5QzMyNy4yODEgNDUuNzcgMjQ4LjcyMSA0NS43NyAxNzQuNDA4IDI3LjE5OUwxNjIuMDk0IDI0LjExM0MxNjIuMDc2IDI0LjEwOSAxNjIuMDY0IDI0LjEwNyAxNjIuMDQ3IDI0LjEwMkwxNjEuOTM5IDI0LjA3NEMxNjAuOTQ1IDIzLjgxNiAxNjAuMDE4IDI0LjM2NyAxNTkuMDI1IDI0LjQ5NkMxNTguMDEgMjQuNjI1IDE1Ni45NzEgMjQuMzQ2IDE1Ni4wMzMgMjQuODg3QzE1Ni4wMTQgMjQuODk4IDE1Ni4wMTYgMjQuOTIyIDE1NS45OTYgMjQuOTM0QzE1NS45NjUgMjQuOTUxIDE1NS45MjQgMjQuOTMgMTU1Ljg5MyAyNC45NDlDMTU0Ljk1NSAyNS41MSAxNTQuNjQ1IDI2LjYxMyAxNTQuMDE4IDI3LjQ4QzE1My40MzggMjguMjg1IDE1Mi41MzcgMjguODY1IDE1Mi4yOTEgMjkuODE0QzE1Mi4yODMgMjkuODQ2IDE1Mi4yNDQgMjkuODU3IDE1Mi4yMzYgMjkuODg5QzEzMS42NTggMTEyLjI2NCA4OS4wNjYgMTg3LjUxIDI5LjAzNSAyNDcuNTY0TDI2LjMzMiAyNTAuMjU0QzIzLjIyMyAyNTMuMzc5IDIzLjIyMyAyNTguNDQzIDI2LjMzMiAyNjEuNTdMMjkuMDUxIDI2NC4yODlDODkuMDY2IDMyNC4zMTIgMTMxLjY1OCAzOTkuNTYxIDE1Mi4yMzYgNDgxLjkzNkMxNTIuMjQ0IDQ4MS45NjcgMTUyLjI4MyA0ODEuOTc5IDE1Mi4yOTEgNDgyLjAxQzE1Mi41MzcgNDgyLjk1NyAxNTMuNDM3IDQ4My41MzcgMTU0LjAxOCA0ODQuMzQyQzE1NC42NDUgNDg1LjIwOSAxNTQuOTU1IDQ4Ni4zMTQgMTU1Ljg5MyA0ODYuODc1QzE1NS45MjQgNDg2Ljg5MyAxNTUuOTY1IDQ4Ni44NzMgMTU1Ljk5NiA0ODYuODkxQzE1Ni4wMTYgNDg2LjkwMiAxNTYuMDE0IDQ4Ni45MjYgMTU2LjAzMyA0ODYuOTM3QzE1Ny4yODMgNDg3LjY1NiAxNTguNjQzIDQ4OCAxNjAuMDAyIDQ4OEMxNjAuNDU1IDQ4OCAxNjAuODU1IDQ4Ny43MzQgMTYxLjMwMSA0ODcuNjU4QzE2MS41MiA0ODcuNjI1IDE2MS43MjEgNDg3Ljc5OSAxNjEuOTM5IDQ4Ny43NUwxNzQuNDA4IDQ4NC42MjNDMjQ4LjcyMSA0NjYuMDU1IDMyNy4yODEgNDY2LjA1NSA0MDEuNTkyIDQ4NC42MjNMNDE0LjA2MSA0ODcuNzVDNDE0LjcwMSA0ODcuOTA2IDQxNS4zNDIgNDg4IDQxNS45OTggNDg4QzQxNy4zNTcgNDg4IDQxOC43MTcgNDg3LjY1NiA0MTkuOTY3IDQ4Ni45MzhDNDE5Ljk3OSA0ODYuOTMgNDE5Ljk3OSA0ODYuOTE0IDQxOS45OSA0ODYuOTA2QzQyMC4wMjUgNDg2Ljg4NSA0MjAuMDcyIDQ4Ni44OTYgNDIwLjEwNyA0ODYuODc1QzQyMS4wNDUgNDg2LjMxNCA0MjEuMzU1IDQ4NS4yMDkgNDIxLjk4MiA0ODQuMzQyQzQyMi41NjIgNDgzLjUzNyA0MjMuNDYzIDQ4Mi45NTcgNDIzLjcwOSA0ODIuMDFDNDIzLjcxNyA0ODEuOTc5IDQyMy43NTYgNDgxLjk2NyA0MjMuNzY0IDQ4MS45MzZDNDQ0LjM0MiAzOTkuNTYxIDQ4Ni45MzYgMzI0LjMxMiA1NDYuOTY1IDI2NC4yNThMNTQ5LjY2OCAyNjEuNTdDNTUyLjc3NyAyNTguNDQzIDU1Mi43NzcgMjUzLjM3OSA1NDkuNjY4IDI1MC4yNTRaTTQxMy41MTQgNTIuMzE2QzQzNC45MDYgMTI1LjQyMiA0NzMuMjAzIDE5Mi40MjIgNTI1LjM0MiAyNDcuOTA4SDQzNS40M0M0MDMuMjI5IDIxNS40MjYgMzgwLjI4NyAxNzQuOTk2IDM2OC42OTEgMTMwLjc4OUw0MTMuNTE0IDUyLjMxNlpNMjg4IDIzOS43N0wyMzEuODAxIDE0MS4zNzdDMjY4LjgzNiAxNDkuMDkgMzA3LjE4NiAxNDkuMDkgMzQ0LjIwMSAxNDEuMzc5TDI4OCAyMzkuNzdaTTM1Ny44NTkgMTQ5Ljc1NEMzNjkuNiAxODYuMDQxIDM4OC42OCAyMTkuMzk4IDQxNCAyNDcuOTA4SDMwMS43OTNMMzU3Ljg1OSAxNDkuNzU0Wk0yNzQuMjA3IDI0Ny45MDhIMTYxLjk5OEMxODcuMzI4IDIxOS4zNzUgMjA2LjQwMiAxODYuMDE2IDIxOC4xNDMgMTQ5Ljc1MkwyNzQuMjA3IDI0Ny45MDhaTTI3NC4yMDcgMjYzLjkxNEwyMTguMTQzIDM2Mi4wNjhDMjA2LjQwMiAzMjUuNzgxIDE4Ny4zMiAyOTIuNDI0IDE2Mi4wMDIgMjYzLjkxNEgyNzQuMjA3Wk0yODggMjcyLjA1NUwzNDQuMjAxIDM3MC40NDVDMzA3LjE2NCAzNjIuNzM0IDI2OC44MTQgMzYyLjczNCAyMzEuODAxIDM3MC40NDNMMjg4IDI3Mi4wNTVaTTMwMS43OTMgMjYzLjkxNEg0MTQuMDAyQzM4OC42NzIgMjkyLjQ0OSAzNjkuNiAzMjUuODA1IDM1Ny44NTkgMzYyLjA2OEwzMDEuNzkzIDI2My45MTRaTTM5OS45OCA0My43MjNMMzU0LjczMiAxMjIuOTQxTDM1MS4wNDcgMTIzLjg2MUMzMDkuNzk3IDEzNC4xMTUgMjY2LjIwMyAxMzQuMTE1IDIyNC45NTUgMTIzLjg2MUwyMjEuMjcgMTIyLjk0MUwxNzYuMDIgNDMuNzI1QzI0OS40MjggNjEuMjE1IDMyNi41NDcgNjEuMjEzIDM5OS45OCA0My43MjNaTTE2Mi40ODYgNTIuMzE4TDIwNy4zMTEgMTMwLjc4OUMxOTUuNzE5IDE3NC45ODQgMTcyLjc3OSAyMTUuNDAyIDE0MC41NjYgMjQ3LjkwOEg1MC42NTZDMTAyLjgwMSAxOTIuMzk2IDE0MS4xMDQgMTI1LjM5OCAxNjIuNDg2IDUyLjMxOFpNMTYyLjQ4NiA0NTkuNTA2QzE0MS4wOTQgMzg2LjQgMTAyLjc5OSAzMTkuNCA1MC42NTggMjYzLjkxNEgxNDAuNTdDMTcyLjc3MSAyOTYuMzk4IDE5NS43MTUgMzM2LjgyOCAyMDcuMzExIDM4MS4wMzNMMTYyLjQ4NiA0NTkuNTA2Wk0yODggNDU0LjY3NkMyNTAuMzQ2IDQ1NC42NzYgMjEyLjczMiA0NTkuMzU1IDE3Ni4wMiA0NjguMUwyMjEuMjcgMzg4Ljg4M0wyMjQuOTU1IDM4Ny45NjFDMjY2LjIwMyAzNzcuNzA3IDMwOS43OTcgMzc3LjcwNyAzNTEuMDQ3IDM4Ny45NjFMMzU0LjczMiAzODguODgzTDM5OS45OCA0NjguMDk4QzM2My4yNzEgNDU5LjM1NCAzMjUuNjcyIDQ1NC42NzYgMjg4IDQ1NC42NzZaTTQxMy41MTQgNDU5LjUwNEwzNjguNjkxIDM4MS4wMzNDMzgwLjI4MyAzMzYuODQgNDAzLjIyMSAyOTYuNDIyIDQzNS40MzQgMjYzLjkxNEg1MjUuMzQ0QzQ3My4yMDEgMzE5LjQyNiA0MzQuODk2IDM4Ni40MjQgNDEzLjUxNCA0NTkuNTA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SpiderWeb(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M549.668 250.254L546.949 247.533C486.936 187.51 444.342 112.264 423.764 29.889C423.756 29.857 423.717 29.846 423.709 29.814C423.463 28.865 422.563 28.285 421.982 27.48C421.355 26.613 421.045 25.51 420.107 24.949C420.076 24.93 420.035 24.951 420.004 24.934C419.984 24.922 419.986 24.898 419.967 24.887C419.076 24.381 418.105 24.668 417.15 24.521C416.104 24.361 415.107 23.801 414.061 24.074L413.939 24.105C413.906 24.113 413.881 24.119 413.846 24.129L401.592 27.199C327.281 45.77 248.721 45.77 174.408 27.199L162.094 24.113C162.076 24.109 162.064 24.107 162.047 24.102L161.939 24.074C160.945 23.816 160.018 24.367 159.025 24.496C158.01 24.625 156.971 24.346 156.033 24.887C156.014 24.898 156.016 24.922 155.996 24.934C155.965 24.951 155.924 24.93 155.893 24.949C154.955 25.51 154.645 26.613 154.018 27.48C153.438 28.285 152.537 28.865 152.291 29.814C152.283 29.846 152.244 29.857 152.236 29.889C131.658 112.264 89.066 187.51 29.035 247.564L26.332 250.254C23.223 253.379 23.223 258.443 26.332 261.57L29.051 264.289C89.066 324.312 131.658 399.561 152.236 481.936C152.244 481.967 152.283 481.979 152.291 482.01C152.537 482.957 153.437 483.537 154.018 484.342C154.645 485.209 154.955 486.314 155.893 486.875C155.924 486.893 155.965 486.873 155.996 486.891C156.016 486.902 156.014 486.926 156.033 486.937C157.283 487.656 158.643 488 160.002 488C160.455 488 160.855 487.734 161.301 487.658C161.52 487.625 161.721 487.799 161.939 487.75L174.408 484.623C248.721 466.055 327.281 466.055 401.592 484.623L414.061 487.75C414.701 487.906 415.342 488 415.998 488C417.357 488 418.717 487.656 419.967 486.938C419.979 486.93 419.979 486.914 419.99 486.906C420.025 486.885 420.072 486.896 420.107 486.875C421.045 486.314 421.355 485.209 421.982 484.342C422.562 483.537 423.463 482.957 423.709 482.01C423.717 481.979 423.756 481.967 423.764 481.936C444.342 399.561 486.936 324.312 546.965 264.258L549.668 261.57C552.777 258.443 552.777 253.379 549.668 250.254ZM413.514 52.316C434.906 125.422 473.203 192.422 525.342 247.908H435.43C403.229 215.426 380.287 174.996 368.691 130.789L413.514 52.316ZM288 239.77L231.801 141.377C268.836 149.09 307.186 149.09 344.201 141.379L288 239.77ZM357.859 149.754C369.6 186.041 388.68 219.398 414 247.908H301.793L357.859 149.754ZM274.207 247.908H161.998C187.328 219.375 206.402 186.016 218.143 149.752L274.207 247.908ZM274.207 263.914L218.143 362.068C206.402 325.781 187.32 292.424 162.002 263.914H274.207ZM288 272.055L344.201 370.445C307.164 362.734 268.814 362.734 231.801 370.443L288 272.055ZM301.793 263.914H414.002C388.672 292.449 369.6 325.805 357.859 362.068L301.793 263.914ZM399.98 43.723L354.732 122.941L351.047 123.861C309.797 134.115 266.203 134.115 224.955 123.861L221.27 122.941L176.02 43.725C249.428 61.215 326.547 61.213 399.98 43.723ZM162.486 52.318L207.311 130.789C195.719 174.984 172.779 215.402 140.566 247.908H50.656C102.801 192.396 141.104 125.398 162.486 52.318ZM162.486 459.506C141.094 386.4 102.799 319.4 50.658 263.914H140.57C172.771 296.398 195.715 336.828 207.311 381.033L162.486 459.506ZM288 454.676C250.346 454.676 212.732 459.355 176.02 468.1L221.27 388.883L224.955 387.961C266.203 377.707 309.797 377.707 351.047 387.961L354.732 388.883L399.98 468.098C363.271 459.354 325.672 454.676 288 454.676ZM413.514 459.504L368.691 381.033C380.283 336.84 403.221 296.422 435.434 263.914H525.344C473.201 319.426 434.896 386.424 413.514 459.504Z" />
        </Icon>
    </>
}