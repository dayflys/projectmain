import React, {useState, useEffect} from "react";

export default function Login() {
    const [accountId,setAccountId] = useState(0);

    const handleChange = (arg) => {
        setAccountId(arg.target.value);
    }

    return (<form>
        <label>
            아이디:
            <input type="text" value={accountId.value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>
    );
}