
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-tongue-wink` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tongue-wink?s=thin face-grin-tongue-wink}
 * @preview ![face-grin-tongue-wink](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYuMDAxIDIwNi44ODlDNDE2LjAwMSAxNjIuNzU2IDM4MC4yMDYgMTI2Ljk1MiAzMzYuMDY5IDEyNi45NTJDMjkxLjc5NiAxMjYuOTUyIDI1Ni4wMDEgMTYyLjc1NiAyNTYuMDAxIDIwNi44ODlTMjkxLjc5NiAyODYuODI2IDMzNi4wNjkgMjg2LjgyNkMzODAuMjA2IDI4Ni44MjYgNDE2LjAwMSAyNTEuMDIyIDQxNi4wMDEgMjA2Ljg4OVpNMjcyLjAwMSAyMDYuODg5QzI3Mi4wMDEgMTcxLjYyOCAzMDAuNzQxIDE0Mi45NCAzMzYuMDY5IDE0Mi45NEMzNzEuMzIxIDE0Mi45NCA0MDAuMDAxIDE3MS42MjggNDAwLjAwMSAyMDYuODg5UzM3MS4zMjEgMjcwLjgzOSAzMzYuMDY5IDI3MC44MzlDMzAwLjc0MSAyNzAuODM5IDI3Mi4wMDEgMjQyLjE1MSAyNzIuMDAxIDIwNi44ODlaTTM2OC4wMDEgMjA2Ljg4OUMzNjguMDAxIDE4OS4yNDcgMzUzLjY0MSAxNzQuOTE1IDMzNi4wMDEgMTc0LjkxNVMzMDQuMDAxIDE4OS4yNDcgMzA0LjAwMSAyMDYuODg5UzMxOC4zNiAyMzguODY0IDMzNi4wMDEgMjM4Ljg2NFMzNjguMDAxIDIyNC41MzIgMzY4LjAwMSAyMDYuODg5Wk0zMzYuMDAxIDIyMi44NzdDMzI3LjE3MyAyMjIuODc3IDMyMC4wMDEgMjE1LjY5NSAzMjAuMDAxIDIwNi44ODlDMzIwLjAwMSAxOTguMDg0IDMyNy4xNzMgMTkwLjkwMiAzMzYuMDAxIDE5MC45MDJTMzUyLjAwMSAxOTguMDg0IDM1Mi4wMDEgMjA2Ljg4OUMzNTIuMDAxIDIxNS42OTUgMzQ0LjgyOSAyMjIuODc3IDMzNi4wMDEgMjIyLjg3N1pNMTI3Ljg5MSAzMzQuNzkyQzE1OS41MDMgMzQ0Ljk2NCAyMDYuMTc3IDM1MC43OTkgMjU1Ljk0OCAzNTAuNzk5QzMwNS42OTIgMzUwLjc5OSAzNTIuMzQxIDM0NC45NzIgMzgzLjk4MSAzMzQuOEwzODQuMDI4IDMzNC45MjFDMzgxLjIwNCAzNTEuNzgzIDM3MC4yNTMgMzY2LjkxNSAzNTQuOTc1IDM3OS40MDlDMzUzLjEyNCAzODAuOTI0IDM1Mi4wMDEgMzgzLjE2IDM1Mi4wMDEgMzg1LjU1M0MzNTIuMDAxIDM5Mi4yOSAzNTkuODQ1IDM5NS45MDQgMzY1LjA3MSAzOTEuNjQyQzM4My4xOTYgMzc2Ljg3MiAzOTYuMjk0IDM1OC41MzUgMzk5LjgwNyAzMzcuNTZDNDAxLjM2IDMyNy4zMTQgMzkzLjM2MiAzMTguODAxIDM4My45NzUgMzE4LjgwMUMzODIuMzc4IDMxOC44MDEgMzgwLjczOSAzMTkuMDQ3IDM3OS4xIDMxOS41NzRDMzQ4LjgyNyAzMjkuMzE2IDMwMy45MDEgMzM0LjgxMiAyNTUuOTQ4IDMzNC44MTJTMTYzLjA2OSAzMjkuMzE2IDEzMi43OTYgMzE5LjU3NEMxMzEuMTQgMzE5LjA0NyAxMjkuNDg3IDMxOC44MDEgMTI3Ljg3NiAzMTguODAxQzExOC40MTcgMzE4LjgwMSAxMTAuNDM0IDMyNy4zMTQgMTEyLjA4OSAzMzcuNTZDMTE1LjY0OSAzNTguNTU1IDEyOC43ODIgMzc2LjkwNCAxNDYuOTMyIDM5MS42ODlDMTUyLjE1OSAzOTUuOTQzIDE2MC4wMDEgMzkyLjMzMyAxNjAuMDAxIDM4NS41OTZWMzg1LjUzN0MxNjAuMDAxIDM4My4xNDkgMTU4Ljg3OCAzODAuOTE2IDE1Ny4wMjYgMzc5LjQwMkMxNDEuNzI3IDM2Ni44OCAxMzAuNzQ1IDM1MS43MDkgMTI3Ljg5MSAzMzQuNzkyWk0yODguNjk4IDM3Ny4wMDlDMjg1Ljg2NCAzNzcuMDA5IDI4My4wMTEgMzc3LjM1MiAyODAuMjIyIDM3OC4wNTFMMjU2LjAwMSAzODQuMTAxTDIzMS43ODIgMzc4LjA1MUMyMjguOTkxIDM3Ny4zNTIgMjI2LjE0IDM3Ny4wMDkgMjIzLjMwNiAzNzcuMDA5QzIxNC4wMTMgMzc3LjAwOSAyMDQuOTMxIDM4MC43MzYgMTk5LjAzMiAzODguMDgyQzE5NC42MzQgMzkzLjU1OCAxOTIuMDAxIDQwMC41MTQgMTkyLjAwMSA0MDguMDgyVjQ0OC4wNUMxOTIuMDAxIDQ4My4zNyAyMjAuNjU1IDUxMiAyNTYuMDAxIDUxMkMyOTEuMzQ5IDUxMiAzMjAuMDAxIDQ4My4zNyAzMjAuMDAxIDQ0OC4wNVY0MDguMDgyQzMyMC4wMDEgNDAwLjUxNCAzMTcuMzcgMzkzLjU1OCAzMTIuOTcyIDM4OC4wODJDMzA3LjA3MSAzODAuNzM2IDI5Ny45OTEgMzc3LjAwOSAyODguNjk4IDM3Ny4wMDlaTTMwNC4wMDEgNDQ4LjA1QzMwNC4wMDEgNDc0LjQ5OCAyODIuNDY4IDQ5Ni4wMTMgMjU2LjAwMSA0OTYuMDEzUzIwOC4wMDEgNDc0LjQ5OCAyMDguMDAxIDQ0OC4wNVY0MDguMDgyQzIwOC4wMDEgNDAzLjQzMyAyMDkuOTA5IDQwMC4wODEgMjExLjUxMSAzOTguMDlDMjE0LjExIDM5NC44NSAyMTguNDA5IDM5Mi45OTYgMjIzLjMwNiAzOTIuOTk2QzIyNC44NSAzOTIuOTk2IDIyNi4zOTUgMzkzLjE4NCAyMjcuOTAxIDM5My41NjJMMjQ4LjA1OSAzOTguNTk3QzI0OC4wNTcgMzk4LjY1MiAyNDguMDAxIDM5OC42ODMgMjQ4LjAwMSAzOTguNzM4VjQzMC43MTNDMjQ4LjAwMSA0MzUuMTE1IDI1MS41NzkgNDM4LjcwNiAyNTYuMDAxIDQzOC43MDZTMjY0LjAwMSA0MzUuMTE1IDI2NC4wMDEgNDMwLjcxM1YzOTguNzM4QzI2NC4wMDEgMzk4LjY4MyAyNjMuOTQ0IDM5OC42NTIgMjYzLjk0MiAzOTguNTk3TDI4NC4xMDQgMzkzLjU2MkMyODUuNjA2IDM5My4xODQgMjg3LjE1MyAzOTIuOTk2IDI4OC42OTggMzkyLjk5NkMyOTMuNTkzIDM5Mi45OTYgMjk3Ljg5MSAzOTQuODUgMzAwLjQ5MyAzOTguMDlDMzAyLjA5MyA0MDAuMDgxIDMwNC4wMDEgNDAzLjQzMyAzMDQuMDAxIDQwOC4wODJWNDQ4LjA1Wk0yNDAuNDQyIDguNDkxQzEyMS45NCAxNS45NTQgMjUuMjIgMTExLjYzNiAxNi42NDcgMjI5Ljk3M0M5LjMyMyAzMzEuMDg0IDY0Ljg0MyA0MTkuOTc5IDE0OC4xMDggNDYxLjkzOEMxNTMuNTUgNDY0LjY4MiAxNjAuMDAxIDQ2MC43OTggMTYwLjAwMSA0NTQuNzA5QzE2MC4wMDEgNDUxLjY1MyAxNTguMjUzIDQ0OC45MDkgMTU1LjUyMiA0NDcuNTMxQzc3LjEwNCA0MDcuOTg4IDI0LjgzNyAzMjMuOTc3IDMyLjgwMiAyMjguNzA4QzQxLjk0IDExOS4zOTYgMTMxLjU4OSAzMS41NzEgMjQxLjE0IDI0LjQ3MUMzNzEuMzU0IDE2LjAyNCA0ODAuMDAxIDExOS40NzQgNDgwLjAwMSAyNDcuODFDNDgwLjAwMSAzMzUuMTAxIDQyOS42MTQgNDEwLjY1IDM1Ni40ODcgNDQ3LjUyN0MzNTMuNzUzIDQ0OC45MDkgMzUyLjAwMSA0NTEuNjU3IDM1Mi4wMDEgNDU0LjcxN0MzNTIuMDAxIDQ2MC44MjIgMzU4LjQ2NiA0NjQuNjc4IDM2My45MjEgNDYxLjkyNkM0NDIuMjM3IDQyMi40NDYgNDk2LjAwMSAzNDEuNDQzIDQ5Ni4wMDEgMjQ3LjgxQzQ5Ni4wMDEgMTEwLjIyMyAzODAuMDM2IC0wLjMwNyAyNDAuNDQyIDguNDkxWk0xNjAuMDAxIDE5OC44OTZDMTc5LjkyMyAxOTguODk2IDE5OC41MDEgMjA5LjYwNiAyMDguNTE2IDIyNi44NzRDMjEwIDIyOS40MzQgMjEyLjY4OCAyMzAuODcgMjE1LjQzOCAyMzAuODdDMjE2LjgxMyAyMzAuODcgMjE4LjE4OCAyMzAuNTI3IDIxOS40NTQgMjI5LjgwOUMyMjMuMjY2IDIyNy41OTIgMjI0LjU3OSAyMjIuNjg5IDIyMi4zNiAyMTguODhDMjA5LjUwMSAxOTYuNjc5IDE4NS42MSAxODIuOTA4IDE2MC4wMDEgMTgyLjkwOFMxMTAuNTAxIDE5Ni42NzkgOTcuNjQxIDIxOC44OEM5NS40MjMgMjIyLjY4OSA5Ni43MzUgMjI3LjU5MiAxMDAuNTQ4IDIyOS44MDlDMTA0LjMyOSAyMzEuOTYzIDEwOS4yNTEgMjMwLjY4MyAxMTEuNDg1IDIyNi44NzRDMTIxLjUwMSAyMDkuNjA2IDE0MC4wNzkgMTk4Ljg5NiAxNjAuMDAxIDE5OC44OTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceGrinTongueWink(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416.001 206.889C416.001 162.756 380.206 126.952 336.069 126.952C291.796 126.952 256.001 162.756 256.001 206.889S291.796 286.826 336.069 286.826C380.206 286.826 416.001 251.022 416.001 206.889ZM272.001 206.889C272.001 171.628 300.741 142.94 336.069 142.94C371.321 142.94 400.001 171.628 400.001 206.889S371.321 270.839 336.069 270.839C300.741 270.839 272.001 242.151 272.001 206.889ZM368.001 206.889C368.001 189.247 353.641 174.915 336.001 174.915S304.001 189.247 304.001 206.889S318.36 238.864 336.001 238.864S368.001 224.532 368.001 206.889ZM336.001 222.877C327.173 222.877 320.001 215.695 320.001 206.889C320.001 198.084 327.173 190.902 336.001 190.902S352.001 198.084 352.001 206.889C352.001 215.695 344.829 222.877 336.001 222.877ZM127.891 334.792C159.503 344.964 206.177 350.799 255.948 350.799C305.692 350.799 352.341 344.972 383.981 334.8L384.028 334.921C381.204 351.783 370.253 366.915 354.975 379.409C353.124 380.924 352.001 383.16 352.001 385.553C352.001 392.29 359.845 395.904 365.071 391.642C383.196 376.872 396.294 358.535 399.807 337.56C401.36 327.314 393.362 318.801 383.975 318.801C382.378 318.801 380.739 319.047 379.1 319.574C348.827 329.316 303.901 334.812 255.948 334.812S163.069 329.316 132.796 319.574C131.14 319.047 129.487 318.801 127.876 318.801C118.417 318.801 110.434 327.314 112.089 337.56C115.649 358.555 128.782 376.904 146.932 391.689C152.159 395.943 160.001 392.333 160.001 385.596V385.537C160.001 383.149 158.878 380.916 157.026 379.402C141.727 366.88 130.745 351.709 127.891 334.792ZM288.698 377.009C285.864 377.009 283.011 377.352 280.222 378.051L256.001 384.101L231.782 378.051C228.991 377.352 226.14 377.009 223.306 377.009C214.013 377.009 204.931 380.736 199.032 388.082C194.634 393.558 192.001 400.514 192.001 408.082V448.05C192.001 483.37 220.655 512 256.001 512C291.349 512 320.001 483.37 320.001 448.05V408.082C320.001 400.514 317.37 393.558 312.972 388.082C307.071 380.736 297.991 377.009 288.698 377.009ZM304.001 448.05C304.001 474.498 282.468 496.013 256.001 496.013S208.001 474.498 208.001 448.05V408.082C208.001 403.433 209.909 400.081 211.511 398.09C214.11 394.85 218.409 392.996 223.306 392.996C224.85 392.996 226.395 393.184 227.901 393.562L248.059 398.597C248.057 398.652 248.001 398.683 248.001 398.738V430.713C248.001 435.115 251.579 438.706 256.001 438.706S264.001 435.115 264.001 430.713V398.738C264.001 398.683 263.944 398.652 263.942 398.597L284.104 393.562C285.606 393.184 287.153 392.996 288.698 392.996C293.593 392.996 297.891 394.85 300.493 398.09C302.093 400.081 304.001 403.433 304.001 408.082V448.05ZM240.442 8.491C121.94 15.954 25.22 111.636 16.647 229.973C9.323 331.084 64.843 419.979 148.108 461.938C153.55 464.682 160.001 460.798 160.001 454.709C160.001 451.653 158.253 448.909 155.522 447.531C77.104 407.988 24.837 323.977 32.802 228.708C41.94 119.396 131.589 31.571 241.14 24.471C371.354 16.024 480.001 119.474 480.001 247.81C480.001 335.101 429.614 410.65 356.487 447.527C353.753 448.909 352.001 451.657 352.001 454.717C352.001 460.822 358.466 464.678 363.921 461.926C442.237 422.446 496.001 341.443 496.001 247.81C496.001 110.223 380.036 -0.307 240.442 8.491ZM160.001 198.896C179.923 198.896 198.501 209.606 208.516 226.874C210 229.434 212.688 230.87 215.438 230.87C216.813 230.87 218.188 230.527 219.454 229.809C223.266 227.592 224.579 222.689 222.36 218.88C209.501 196.679 185.61 182.908 160.001 182.908S110.501 196.679 97.641 218.88C95.423 222.689 96.735 227.592 100.548 229.809C104.329 231.963 109.251 230.683 111.485 226.874C121.501 209.606 140.079 198.896 160.001 198.896Z" />
        </Icon>
    </>
}