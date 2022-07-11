import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Avatar } from "@mui/material";
//css
import "./menu.css";
import iconGive from "../../../assets/images/vectorMenu.jpg";
import iconRedeem from "../../../assets/images/iconRedeem.jpg";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { GET_USER_ID_LIST_REQUEST } from "../../../redux/reducer/userIDReducer/actionTypes";

export default function Menu() {
  let pointUSLocale = Intl.NumberFormat("en-US");
  const usersId = useAppSelector((state) => state.userIDReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: GET_USER_ID_LIST_REQUEST });
  }, [dispatch]);

  return (
    <div className="menu">
      <div className="top-menu">
        <h3>My Points</h3>
        <List sx={{ width: "100%", maxWidth: 360 }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <img src={iconGive} alt="giveIcon" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Points to give"
              secondary={pointUSLocale.format(usersId.usersId?.givePoint)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <img src={iconRedeem} alt="redeemIcon" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Points to redeem"
              secondary={pointUSLocale.format(usersId.usersId?.redeemPoint)}
            />
          </ListItem>
        </List>
      </div>
      <hr />
      <div className="botton-menu">
        <ul className="nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active navLink" : "navLink"
              }
              to="/home"
            >
              <svg
                width={18}
                height={21}
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 6.50001L11 1.24001C10.45 0.748051 9.73794 0.476074 9 0.476074C8.26207 0.476074 7.55003 0.748051 7 1.24001L1 6.50001C0.682372 6.78408 0.428903 7.13256 0.256475 7.52225C0.084047 7.91194 -0.00338411 8.33389 3.24138e-06 8.76001V17.5C3.24138e-06 18.2957 0.316074 19.0587 0.878683 19.6213C1.44129 20.1839 2.20435 20.5 3 20.5H15C15.7957 20.5 16.5587 20.1839 17.1213 19.6213C17.6839 19.0587 18 18.2957 18 17.5V8.75001C18.002 8.32557 17.9139 7.90555 17.7415 7.51769C17.5691 7.12983 17.3164 6.78296 17 6.50001ZM11 18.5H7V13.5C7 13.2348 7.10536 12.9804 7.2929 12.7929C7.48043 12.6054 7.73479 12.5 8 12.5H10C10.2652 12.5 10.5196 12.6054 10.7071 12.7929C10.8946 12.9804 11 13.2348 11 13.5V18.5ZM16 17.5C16 17.7652 15.8946 18.0196 15.7071 18.2071C15.5196 18.3946 15.2652 18.5 15 18.5H13V13.5C13 12.7044 12.6839 11.9413 12.1213 11.3787C11.5587 10.8161 10.7957 10.5 10 10.5H8C7.20435 10.5 6.44129 10.8161 5.87868 11.3787C5.31607 11.9413 5 12.7044 5 13.5V18.5H3C2.73479 18.5 2.48043 18.3946 2.2929 18.2071C2.10536 18.0196 2 17.7652 2 17.5V8.75001C2.00018 8.60802 2.0306 8.4677 2.08922 8.33839C2.14784 8.20907 2.23333 8.09372 2.34 8.00001L8.34 2.75001C8.52249 2.58969 8.7571 2.50127 9 2.50127C9.24291 2.50127 9.47751 2.58969 9.66 2.75001L15.66 8.00001C15.7667 8.09372 15.8522 8.20907 15.9108 8.33839C15.9694 8.4677 15.9998 8.60802 16 8.75001V17.5Z"
                  fill="#666666"
                />
              </svg>
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active navLink" : "navLink"
              }
              to="/redeem"
            >
              <svg
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 0.500001C14.0158 0.499946 14.5253 0.61392 14.992 0.833765C15.4587 1.05361 15.8709 1.37389 16.1994 1.77169C16.5278 2.16948 16.7642 2.63496 16.8917 3.1348C17.0193 3.63464 17.0347 4.15649 16.937 4.663L16.922 4.729C17.792 5.01921 18.5526 5.56819 19.102 6.3025C19.6515 7.0368 19.9636 7.9214 19.9965 8.83791C20.0295 9.75443 19.7817 10.6592 19.2864 11.431C18.7911 12.2029 18.0719 12.8051 17.225 13.157L16.139 19.664C16.1002 19.8975 15.9798 20.1097 15.7992 20.2627C15.6187 20.4158 15.3897 20.4999 15.153 20.5H4.847C4.61029 20.4999 4.3813 20.4158 4.20075 20.2627C4.02021 20.1097 3.89982 19.8975 3.861 19.664L2.832 13.494C2.13992 13.4547 1.4828 13.177 0.972321 12.7081C0.461845 12.2391 0.12952 11.6078 0.0318355 10.9216C-0.0658495 10.2353 0.0771337 9.53639 0.436481 8.94362C0.795828 8.35085 1.34936 7.90081 2.003 7.67L2 7.5C1.9998 6.48746 2.25585 5.49133 2.74431 4.60439C3.23276 3.71746 3.93774 2.96856 4.79357 2.42746C5.6494 1.88635 6.62825 1.57063 7.63896 1.5097C8.64967 1.44877 9.65936 1.64462 10.574 2.079C10.8923 1.59358 11.3264 1.19506 11.8373 0.919394C12.3481 0.643727 12.9195 0.499594 13.5 0.500001ZM7 13.5H4.86L5.69399 18.5H7V13.5ZM11 13.5H9V18.5H11V13.5ZM15.139 13.5H13V18.5H14.305L15.139 13.5ZM8 3.5C5.858 3.5 4.109 5.184 4.005 7.267L4 7.464L4.003 7.634C4.01006 8.02668 3.90137 8.41274 3.69046 8.74404C3.47955 9.07535 3.17576 9.33722 2.817 9.497L2.667 9.556C2.44495 9.63506 2.25793 9.78995 2.13887 9.99337C2.01981 10.1968 1.97635 10.4357 2.01614 10.668C2.05594 10.9003 2.17643 11.1112 2.35641 11.2633C2.53639 11.4155 2.7643 11.4993 3 11.5H15.5C15.8696 11.5 16.2346 11.418 16.5688 11.26C16.9029 11.102 17.1979 10.8718 17.4324 10.5861C17.6669 10.3004 17.8351 9.96626 17.925 9.60773C18.0148 9.24919 18.0241 8.87519 17.952 8.51265C17.88 8.15012 17.7284 7.80807 17.5083 7.51114C17.2882 7.21421 17.0049 6.96979 16.679 6.79547C16.353 6.62116 15.9925 6.52128 15.6233 6.50305C15.2542 6.48481 14.8855 6.54866 14.544 6.69L14.369 6.771C13.9076 7.00877 13.3718 7.05783 12.8748 6.90779C12.3779 6.75776 11.9588 6.4204 11.706 5.967L11.636 5.83C11.3164 5.13443 10.8039 4.54517 10.1594 4.13216C9.51495 3.71916 8.76547 3.49975 8 3.5ZM13.5 2.5C13.2408 2.49995 12.9859 2.56707 12.7604 2.69484C12.5348 2.8226 12.3462 3.00664 12.213 3.229C12.7294 3.73738 13.1495 4.33501 13.453 4.993C13.897 4.765 14.383 4.609 14.899 4.54C14.9867 4.31279 15.0177 4.06765 14.9894 3.82576C14.9611 3.58386 14.8744 3.3525 14.7366 3.15165C14.5989 2.9508 14.4143 2.78651 14.1989 2.67297C13.9834 2.55944 13.7435 2.50007 13.5 2.5Z"
                  fill="#666666"
                />
              </svg>
              <span>Redeem Rewards</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active navLink" : "navLink"
              }
              to="/convert"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM5 11H14V13H10V16L5 11ZM10 7V4L15 9H6V7H10Z"
                  fill="#666666"
                />
              </svg>
              <span>Convert Point</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active navLink" : "navLink"
              }
              to="/transactions"
            >
              <svg
                width={18}
                height={22}
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V21C18 21.2652 17.8946 21.5196 17.7071 21.7071C17.5196 21.8946 17.2652 22 17 22H1C0.734784 22 0.48043 21.8946 0.292893 21.7071C0.105357 21.5196 0 21.2652 0 21V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H4V0H6V2H12V0H14V2ZM14 4V6H12V4H6V6H4V4H2V20H16V4H14ZM4 8H14V10H4V8ZM4 12H14V14H4V12Z"
                  fill="#666666"
                />
              </svg>
              <span>My Transactions</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active navLink" : "navLink"
              }
              to="/redemption"
            >
              <svg
                width={20}
                height={18}
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.366 0.437988L16.577 5.99999H20V7.99999H18.833L18.076 17.083C18.0552 17.3329 17.9413 17.5658 17.7568 17.7357C17.5723 17.9055 17.3308 17.9999 17.08 18H2.92C2.66925 17.9999 2.4277 17.9055 2.24322 17.7357C2.05875 17.5658 1.94481 17.3329 1.924 17.083L1.166 7.99999H0V5.99999H3.422L6.634 0.437988L8.366 1.43799L5.732 5.99999H14.267L11.634 1.43799L13.366 0.437988ZM16.826 7.99999H3.173L3.84 16H16.159L16.826 7.99999ZM11 9.99999V14H9V9.99999H11ZM7 9.99999V14H5V9.99999H7ZM15 9.99999V14H13V9.99999H15Z"
                  fill="#666666"
                />
              </svg>
              <span>Daily Redemption</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
