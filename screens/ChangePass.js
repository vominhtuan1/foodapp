import React,{ useState } from "react";

import { Formik } from "formik";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
} from "./../components/formStyles";
const {brand,darkLight} = Colors;
const ChangePass = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/logo1.png')} />
                <PageTitle>FoodApp</PageTitle>
                <Subtitle>Đổi mật khẩu</Subtitle>
                <Formik
                    initialValues={{CurrentPass:'',NewPass:'',ReNewPass:''}}
                    onSubmit={(values)=>{
                        console.log(values);
                    }}
                    
                >{({handleChange,handleBlur,handleSubmit,values})=> (<StyledFormArea>
                    <MyTextInput 
                        label="Mật khẩu hiện tại"
                        icon="lock"
                        placeholder="* * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("CurrentPass")}
                        onBlur={handleBlur("CurrentPass")}
                        value={values.CurrentPass}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MyTextInput 
                        label="Mật khẩu mới"
                        icon="lock"
                        placeholder="* * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("NewPass")}
                        onBlur={handleBlur("NewPass")}
                        value={values.NewPass}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MyTextInput 
                        label="Nhập lại mật khẩu"
                        icon="key"
                        placeholder="* * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("ReNewPass")}
                        onBlur={handleBlur("ReNewPass")}
                        value={values.ReNewPass}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>Lưu thay đổi</ButtonText>
                    </StyledButton>
                    <Line />
                </StyledFormArea>)}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};
const MyTextInput = ({label,icon,isPassword,hidePassword,setHidePassword, ...props})=>{
    return(
        <View>
            <LeftIcon>
                <Entypo name={icon} size={24} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                <Entypo
                name={hidePassword ? "eye-with-line" : "eye"}
                size={24}
                color={darkLight}
                />
            </RightIcon>
        )}

        </View>
    )

}
export default ChangePass;