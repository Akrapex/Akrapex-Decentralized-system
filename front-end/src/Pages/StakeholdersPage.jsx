import BuildEveryStakeholder from "../Components/BuildEveryStakeholder"
import StakeholderHerosection from "../Components/StakeholderHerosection";
import SuccesStories from "../Components/SuccesStories";

const StakeholdersPage = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto ">
      <StakeholderHerosection/>
      <BuildEveryStakeholder />
      <SuccesStories/>
    </div>
  );
}

export default StakeholdersPage
