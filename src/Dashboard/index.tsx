import { LoadingOutlined, DownOutlined } from "@ant-design/icons";
import { Pages, UserConfig, UserRoles } from "../types";
import { Button, Dropdown, Input, MenuProps, Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

import "./index.scss";
import TextArea from "antd/es/input/TextArea";

export default function LoginComponent(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const antIcon = <LoadingOutlined spin />;
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Srinagar Branch",
    },
    {
      key: "2",
      label: "Malleshwaram Branch",
    },
    {
      key: "3",
      label: "Srirampuram Branch",
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem(UserConfig.AccessToken);
    const role = localStorage.getItem(UserConfig.Role);

    if (!token || role !== UserRoles.User) window.location.href = Pages.Login;

    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getContent(): JSX.Element {
    if (isLoading) {
      return (
        <div className="spin">
          <Spin indicator={antIcon} />
        </div>
      );
    } else {
      return (
        <>
          <Modal
            title={<div className="modal modal--header">Add new branch</div>}
            open={isModalOpen}
            footer={null}
            onCancel={() => setIsModalOpen(false)}
          >
            <div className="modal">
              <div className="content">
                <div>
                  <div>Branch Name</div>
                  <Input size="middle" placeholder="Enter branch name" />
                </div>
                <div className="contact">
                  <div className="details">
                    <div>Contact person</div>
                    <Input size="middle" placeholder="Enter name" />
                  </div>
                  <div className="details">
                    <div>Contact no.</div>
                    <Input size="middle" placeholder="Enter contact no." />
                  </div>
                </div>
                <div>
                  <div>Branch address</div>
                  <TextArea rows={4} placeholder="Enter complete address" />
                </div>
              </div>
              <div className="footer">
                <Button
                  className="button button--primary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Add new branch
                </Button>
                <Button
                  className="button button--ghost"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>

          <div className="dashboard">
            <div className="dashboard dashboard--container">
              <div className="header">
                <div className="label">Dashboard</div>
                <div className="action ml-auto">
                  <Input
                    className="mr-16"
                    size="middle"
                    placeholder="Search Branch or Vehicle"
                    prefix={<SearchOutlined />}
                  />
                  <Button
                    className="button button--primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Add new branch
                  </Button>
                </div>
              </div>
              <div className="content">
                <div className="content--header">
                  <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()} className="fs-20">
                      Koramangala Branch &nbsp;
                      <DownOutlined />
                    </a>
                  </Dropdown>
                  <div className="action ml-auto">
                    <Button className="button button--primary">
                      + New Vehicle
                    </Button>
                    <Input
                      size="middle"
                      placeholder="Search"
                      prefix={<SearchOutlined />}
                    />
                    <Dropdown menu={{ items }}>
                      <div className="dropdown">
                        Sort by: Recent
                        <DownOutlined />
                      </div>
                    </Dropdown>
                  </div>
                </div>
                <div className="vehicles">
                  <div className="vehicles vehicles--container">
                    <div className="label-container">
                      <div className="status">Available</div>
                      <img
                        src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg"
                        alt=""
                      />
                      <div className="p-14">
                        <div className="label">Hundai i10</div>
                        <div className="sub-label">Rs. 10/hr</div>
                        <div className="sub-label mt-12">
                          Model: XC, 1.2l petrol engine
                        </div>
                        <div className="sub-label">12,000 kms</div>
                      </div>
                    </div>
                    <div className="details mb-auto">View details</div>
                  </div>
                  <div className="vehicles vehicles--container">
                    <div className="label-container">
                      <div className="status">Available</div>
                      <img
                        src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg"
                        alt=""
                      />
                      <div className="p-14">
                        <div className="label">Hundai i10</div>
                        <div className="sub-label">Rs. 10/hr</div>
                        <div className="sub-label mt-12">
                          Model: XC, 1.2l petrol engine
                        </div>
                        <div className="sub-label">12,000 kms</div>
                      </div>
                    </div>
                    <div className="details mb-auto">View details</div>
                  </div>
                  <div className="vehicles vehicles--container">
                    <div className="label-container">
                      <div className="status">Available</div>
                      <img
                        src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg"
                        alt=""
                      />
                      <div className="p-14">
                        <div className="label">Hundai i10</div>
                        <div className="sub-label">Rs. 10/hr</div>
                        <div className="sub-label mt-12">
                          Model: XC, 1.2l petrol engine
                        </div>
                        <div className="sub-label">12,000 kms</div>
                      </div>
                    </div>
                    <div className="details mb-auto">View details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="dashboard">{getContent()}</div>
    </>
  );
}
