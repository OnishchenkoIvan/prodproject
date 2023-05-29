import React, { Suspense } from "react";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Navbar } from "widgets/Navbar/ui/Navbar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
