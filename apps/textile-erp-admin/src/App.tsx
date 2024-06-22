import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WarehouseList } from "./warehouse/WarehouseList";
import { WarehouseCreate } from "./warehouse/WarehouseCreate";
import { WarehouseEdit } from "./warehouse/WarehouseEdit";
import { WarehouseShow } from "./warehouse/WarehouseShow";
import { ManufacturingList } from "./manufacturing/ManufacturingList";
import { ManufacturingCreate } from "./manufacturing/ManufacturingCreate";
import { ManufacturingEdit } from "./manufacturing/ManufacturingEdit";
import { ManufacturingShow } from "./manufacturing/ManufacturingShow";
import { CrmList } from "./crm/CrmList";
import { CrmCreate } from "./crm/CrmCreate";
import { CrmEdit } from "./crm/CrmEdit";
import { CrmShow } from "./crm/CrmShow";
import { RetailList } from "./retail/RetailList";
import { RetailCreate } from "./retail/RetailCreate";
import { RetailEdit } from "./retail/RetailEdit";
import { RetailShow } from "./retail/RetailShow";
import { HrmsList } from "./hrms/HrmsList";
import { HrmsCreate } from "./hrms/HrmsCreate";
import { HrmsEdit } from "./hrms/HrmsEdit";
import { HrmsShow } from "./hrms/HrmsShow";
import { AccountsBudgetingList } from "./accountsBudgeting/AccountsBudgetingList";
import { AccountsBudgetingCreate } from "./accountsBudgeting/AccountsBudgetingCreate";
import { AccountsBudgetingEdit } from "./accountsBudgeting/AccountsBudgetingEdit";
import { AccountsBudgetingShow } from "./accountsBudgeting/AccountsBudgetingShow";
import { ScmList } from "./scm/ScmList";
import { ScmCreate } from "./scm/ScmCreate";
import { ScmEdit } from "./scm/ScmEdit";
import { ScmShow } from "./scm/ScmShow";
import { PlmList } from "./plm/PlmList";
import { PlmCreate } from "./plm/PlmCreate";
import { PlmEdit } from "./plm/PlmEdit";
import { PlmShow } from "./plm/PlmShow";
import { MlList } from "./ml/MlList";
import { MlCreate } from "./ml/MlCreate";
import { MlEdit } from "./ml/MlEdit";
import { MlShow } from "./ml/MlShow";
import { BiList } from "./bi/BiList";
import { BiCreate } from "./bi/BiCreate";
import { BiEdit } from "./bi/BiEdit";
import { BiShow } from "./bi/BiShow";
import { ProjectManagementList } from "./projectManagement/ProjectManagementList";
import { ProjectManagementCreate } from "./projectManagement/ProjectManagementCreate";
import { ProjectManagementEdit } from "./projectManagement/ProjectManagementEdit";
import { ProjectManagementShow } from "./projectManagement/ProjectManagementShow";
import { ComplianceManagementList } from "./complianceManagement/ComplianceManagementList";
import { ComplianceManagementCreate } from "./complianceManagement/ComplianceManagementCreate";
import { ComplianceManagementEdit } from "./complianceManagement/ComplianceManagementEdit";
import { ComplianceManagementShow } from "./complianceManagement/ComplianceManagementShow";
import { QmsList } from "./qms/QmsList";
import { QmsCreate } from "./qms/QmsCreate";
import { QmsEdit } from "./qms/QmsEdit";
import { QmsShow } from "./qms/QmsShow";
import { EcommerceIntegrationList } from "./ecommerceIntegration/EcommerceIntegrationList";
import { EcommerceIntegrationCreate } from "./ecommerceIntegration/EcommerceIntegrationCreate";
import { EcommerceIntegrationEdit } from "./ecommerceIntegration/EcommerceIntegrationEdit";
import { EcommerceIntegrationShow } from "./ecommerceIntegration/EcommerceIntegrationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TextileERP"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Warehouse"
          list={WarehouseList}
          edit={WarehouseEdit}
          create={WarehouseCreate}
          show={WarehouseShow}
        />
        <Resource
          name="Manufacturing"
          list={ManufacturingList}
          edit={ManufacturingEdit}
          create={ManufacturingCreate}
          show={ManufacturingShow}
        />
        <Resource
          name="Crm"
          list={CrmList}
          edit={CrmEdit}
          create={CrmCreate}
          show={CrmShow}
        />
        <Resource
          name="Retail"
          list={RetailList}
          edit={RetailEdit}
          create={RetailCreate}
          show={RetailShow}
        />
        <Resource
          name="Hrms"
          list={HrmsList}
          edit={HrmsEdit}
          create={HrmsCreate}
          show={HrmsShow}
        />
        <Resource
          name="AccountsBudgeting"
          list={AccountsBudgetingList}
          edit={AccountsBudgetingEdit}
          create={AccountsBudgetingCreate}
          show={AccountsBudgetingShow}
        />
        <Resource
          name="Scm"
          list={ScmList}
          edit={ScmEdit}
          create={ScmCreate}
          show={ScmShow}
        />
        <Resource
          name="Plm"
          list={PlmList}
          edit={PlmEdit}
          create={PlmCreate}
          show={PlmShow}
        />
        <Resource
          name="Ml"
          list={MlList}
          edit={MlEdit}
          create={MlCreate}
          show={MlShow}
        />
        <Resource
          name="Bi"
          list={BiList}
          edit={BiEdit}
          create={BiCreate}
          show={BiShow}
        />
        <Resource
          name="ProjectManagement"
          list={ProjectManagementList}
          edit={ProjectManagementEdit}
          create={ProjectManagementCreate}
          show={ProjectManagementShow}
        />
        <Resource
          name="ComplianceManagement"
          list={ComplianceManagementList}
          edit={ComplianceManagementEdit}
          create={ComplianceManagementCreate}
          show={ComplianceManagementShow}
        />
        <Resource
          name="Qms"
          list={QmsList}
          edit={QmsEdit}
          create={QmsCreate}
          show={QmsShow}
        />
        <Resource
          name="EcommerceIntegration"
          list={EcommerceIntegrationList}
          edit={EcommerceIntegrationEdit}
          create={EcommerceIntegrationCreate}
          show={EcommerceIntegrationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
